import dotenv from 'dotenv';

//Variables de entorno
dotenv.config();

export const config = {
  user: process.env.mysql_user,
  password: process.env.mysql_password,
  host: process.env.mysql_host,
  port: process.env.port,
  database: process.env.mysql_database,
};
