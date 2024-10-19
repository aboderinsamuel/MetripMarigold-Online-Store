# MetripMarigold Farms 🌿

Welcome to **MetripMarigold Farms**! This is a modern, SaaS-driven platform that provides users with a streamlined online shopping experience for farm products. Admins can manage the product listings, while customers can browse, filter, and shop with ease.

## 🚀 About the Project

**MetripMarigold Farms** offers a clean and functional landing page for the farm's brand along with the following key features:

- **SaaS Landing Home Page**: Introduces MetripMarigold Farms and its services.
- **Shop/Menu Page**: Displays all available farm products. Users can filter products based on category.
- **User Authentication**: Users can log in or register, and their data is stored securely in MongoDB.
- **Admin Dashboard**: Admin users can upload new products to the database.
- **Cart Page**: Users can add products to their cart, making checkout smooth and efficient.

## 🛠️ Tech Stack & Tools

The project leverages the following technologies:

### Frontend

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=white&style=flat)
- ![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=Redux&logoColor=white&style=flat)
- ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=TailwindCSS&logoColor=white&style=flat)

### Backend

- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white&style=flat)
- ![Express](https://img.shields.io/badge/-Express-000000?logo=Express&logoColor=white&style=flat)
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=white&style=flat)

### Other Tools

- ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=GitHub&logoColor=white&style=flat)
- ![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white&style=flat)

## 📑 Features

- **Landing Page**: A beautifully designed SaaS landing page.
- **Shop & Filter Products**: View all farm products and filter them by category.
- **Login & Signup**: Secure user authentication using MongoDB.
- **Admin Panel**: Admins can upload new products directly from the platform.
- **Cart Functionality**: Users can add products to their cart for an enhanced shopping experience.

## 📂 File Structure

```bash
├── backend
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── redux
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/metripmarigold-online-store.git
   cd metripmarigold-farms
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend Setup**:
   Open another terminal and navigate to the backend folder:

   ```bash
   cd backend
   npm install
   node index.js
   ```

4. Ensure MongoDB is running locally or connected to your cloud database.

## 💡 How to Use

- **Shop**: Browse products in the shop and use filters to find what you need.
- **Authentication**: Log in or sign up as a user to access the cart.
- **Admin Actions**: If you are an admin, you can upload new products via the admin dashboard.
