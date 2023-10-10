import dotenv from 'dotenv';
dotenv.config();
import express, {Application} from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import "reflect-metadata"
import './config/data-source';



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
  }

  routes() {
    this.app.use('/auth', authRoutes);
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
