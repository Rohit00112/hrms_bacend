import dotenv from 'dotenv';

// Load environment variables first
dotenv.config();

import express from 'express';
import './config/database.js';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3001;


// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'HRMS API',
            version: '1.0.0',
            description: 'Human Resource Management System API Documentation',
            contact: {
                name: 'HRMS Team',
                email: 'admin@hrms.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${port}`,
                description: 'Development server'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./routes/*.js', './index.js'] // Path to the API files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'HRMS API Documentation'
}));


// seed admin user
import Employee from './models/employee.js';
import bcrypt from 'bcryptjs';

const seedAdmin = async () => {
    try {
        const admin = await Employee.findOne({ email: 'admin@gmail.com' });
        if (!admin) {
            const hashedPassword = await bcrypt.hash('admin', 10);
            await Employee.create({
                name: 'Admin',
                email: 'admin@gmail.com',
                password: hashedPassword,
                role: 'admin'
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}

seedAdmin();


// Routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`API Documentation available at http://localhost:${port}/api-docs`);
})