import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import createConnection from './db';
import apiRouter from './routes';
import logger from './utils/logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

createConnection()
  .then(() => {
    logger.info('Database connected sucessfuly');
    app.use('/api/v1', apiRouter);
    app.listen(port, () => {
      logger.info(`server started at port: ${port}`);
    });
  })
  .catch(
    (error: Error) => logger.error('Failed to setup database connection', error),
  );
