import * as dotenv from 'dotenv';

dotenv.config();

const env = (process.env as any);

const IS_PRODUCTION = env.NODE_ENV === 'production';
const DB_CONNECTION = env.DB_CONNECTION_STRING as string; // mongodb connection string
const PORT = parseInt(env.PORT);
const NSE_BASE_URL = env.NSE_BASE_URL as string;

export {
    IS_PRODUCTION,
    DB_CONNECTION,
    PORT,
    NSE_BASE_URL
}