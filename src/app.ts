import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customer.route';
import bikeRoutes from './routes/bike.routes';
import serviceRoutes from './routes/service.routes';
import { errorHandler } from './middlewares/errorHandler';
import { notFound } from './middlewares/notFound';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/bikes', bikeRoutes);
app.use('/api/services', serviceRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
