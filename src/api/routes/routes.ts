import express from 'express';
import { authenticate } from '../middlewares/authenticate';
import { bid } from './bid/bid';
import { market } from './market/market';

const routes = express.Router();

routes.use('/bid', authenticate, bid);
routes.use('/market', market);

export { routes }