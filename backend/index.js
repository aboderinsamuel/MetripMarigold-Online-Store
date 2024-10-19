const express = require('express');
const cors = require('cors');
const corsOptions = {
  origin: '*',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));

// Load PORT from environment variables or default to 8080
const PORT = process.env.PORT || 8080;

// MONGODB CONNECTION
console.log(process.env.MONGODB_URL); // Check if URL is being read correctly
mongoose.set('strictQuery', false); // Disable strict query mode
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 50000, // Optional: adjust timeout settings
    socketTimeoutMS: 45000, // Optional: adjust socket timeout settings
  })
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose schema and model (users and products)
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  confirmPassword: String,
  image: String,
});
const userModel = mongoose.model('user', userSchema);

// API Endpoints
app.get('/', (req, res) => res.send('Server is running'));

// Signup
app.post('/signup', async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.send({ message: 'Email already exists', alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.send({ message: 'Successfully signed up', alert: true });
    }
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).send({ message: 'Server error' });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user && user.password === password) {
      const dataSend = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      };
      res
        .status(200)
        .json({ message: 'Login Successful', alert: true, data: dataSend });
    } else if (user) {
      res.status(401).json({ message: 'Invalid password', alert: false });
    } else {
      res.status(404).json({ message: 'User not found', alert: false });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Product schema and model
const schemaProduct = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model('product', schemaProduct);

// Upload Product API
app.post('/uploadProduct', async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res.send({ message: 'Upload Successful' });
  } catch (error) {
    console.error('Upload product error:', error);
    res.status(500).send({ message: 'Server error' });
  }
});

// Get all products
app.get('/product', async (req, res) => {
  try {
    const products = await productModel.find({});
    res.send(JSON.stringify(products));
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).send({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
