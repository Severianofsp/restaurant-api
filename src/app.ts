import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import swaggerRoutes from './routes/swaggerRoutes';
import 'reflect-metadata';
import './config/data-source';
import morgan from 'morgan';
import cors from 'cors';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.middelware();
        this.routes();
    }

    middelware() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
        this.app.use(cors());
    }

    routes() {
        this.app.use('/auth', authRoutes);
        this.app.use('/users', userRoutes);
        this.app.use('/docs', swaggerRoutes);
    }
}

export default new App().app;
