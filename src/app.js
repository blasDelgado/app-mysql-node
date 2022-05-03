import express from 'express';
import morgan from 'morgan';
import callRoutes from './routes/call-routes.js';
import landingRoutes from './routes/landing-routes.js';

//Iniciación de express
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(callRoutes);
app.use(landingRoutes);

export default app;
