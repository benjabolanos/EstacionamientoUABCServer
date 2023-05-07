import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

export const sequelize = new Sequelize(
    'estacionamiento_uabc', //database name
    'root',                 //user
    'pass',                 //password
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorAlises: false,
        dialectModule: mysql2
    }
);