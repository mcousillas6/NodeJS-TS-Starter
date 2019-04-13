import dotenv from 'dotenv';
import express from 'express';
import apiRouter from './routes';
import logger from './utils/logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', apiRouter);

app.listen( port, () => {
  logger.info(`server started at port: ${port}`);
});
