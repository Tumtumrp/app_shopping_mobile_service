import { EnvOptions } from './interface/env-options.interface';

export const configuration = (): EnvOptions => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    ORIGIN: process.env.ORIGIN || 'http://localhost:3000',
    PORT: parseInt(process.env.PORT, 10) || 5050,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: parseInt(process.env.DB_PORT, 10) || 3306,
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_DATABASE: process.env.DB_DATABASE || 'shopping_mobile_data',
  };
};
