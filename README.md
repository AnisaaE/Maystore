# Maystore

**Maystore** is an e-commerce platform for workwear and related products. Built with a full-stack architecture, it includes a responsive frontend, a powerful backend, and an admin panel for efficient management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- **E-commerce Functionality**: 
  - Product catalog with various categories for workwear.
  - Shopping cart and order management.
  - User registration and login with secure JWT-based authentication.
  
- **Admin Panel**:
  - Product management (add, edit, delete products).
  - Order tracking and status updates.
  - Customer management and data insights.

- **Integration with Econt**:
  - Automatic waybill generation by integrating with Econt’s API.
  
- **Responsive Design**:
  - The frontend is fully responsive, designed with Bootstrap, and offers a smooth user experience on both desktop and mobile.

- **Security**:
  - Authentication and authorization using JWT for secure access to restricted resources.
  - Password hashing with `bcryptjs`.

## Technologies Used

- **Frontend**: 
  - **React** for building the user interface.
  - **Bootstrap** for responsive design.

- **Backend**:
  - **Node.js** and **Express.js** for the REST API.
  - **MongoDB** with **Mongoose** for the database.
  - **JWT** for secure user authentication.

- **Additional Libraries**:
  - `bcryptjs`: For password hashing.
  - `cors`: To enable Cross-Origin Resource Sharing.
  - `dotenv`: For environment variable management.
  - `jsonwebtoken`: For JWT-based authentication.
  - `multer`: For handling file uploads.
  - `node-fetch`: For making HTTP requests (used for Econt API).
  - `nodemailer`: For email notifications.

