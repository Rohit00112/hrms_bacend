# HRMS Backend API

A Human Resource Management System backend built with Node.js, Express, and MongoDB.

## Features

- Employee management (CRUD operations)
- Authentication and authorization
- Role-based access control (Admin, Manager, Employee)
- File upload for profile images
- JWT token-based authentication
- Comprehensive API documentation with Swagger

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Multer** - File upload handling
- **Swagger** - API documentation

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Rohit00112/hrms_bacend.git
cd hrms_bacend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
MONGODB_URI=mongodb://localhost:27017/hrms_db
JWT_SECRET=your_jwt_secret_key
PORT=3001
```

4. Start the server:
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## API Documentation

Once the server is running, you can access the interactive API documentation at:

**http://localhost:3001/api-docs**

The Swagger UI provides:
- Complete API endpoint documentation
- Request/response schemas
- Interactive testing interface
- Authentication examples
- Error response formats

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Employees
- `POST /api/employees` - Create new employee (Admin/Manager only)
- `GET /api/employees` - Get all employees
- `GET /api/employees/:id` - Get employee by ID
- `DELETE /api/employees/:id` - Delete employee (Admin/Manager only)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Default Admin User

The system automatically creates a default admin user:
- **Email**: admin@gmail.com
- **Password**: admin
- **Role**: admin

## Project Structure

```
├── controllers/          # Route controllers
├── middlewares/          # Custom middlewares
├── models/              # Mongoose models
├── routes/              # API routes
├── utils/               # Utility functions
├── uploads/             # File upload directory
├── config/              # Configuration files
├── index.js             # Main application file
└── package.json         # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.
