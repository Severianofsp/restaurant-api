import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT as string, 0),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    logging: true,
    entities: ['src/entities/*ts'],
    subscribers: [],
    migrations: ['src/database/migrations/*ts']
});

AppDataSource.initialize()
    .then(() => {
        console.log('Connected with Database');
    })
    .catch((error) => console.log({ error: error }));

export default AppDataSource;
