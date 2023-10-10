import AppDataSource from '../config/data-source';
import User from '../entities/User';

const repository = AppDataSource.getRepository(User);

export default repository;
