import express from 'express';
import { bid } from './bid/bid';
import { market } from './market/market';

const routes = express.Router();

routes.use('/bid', bid);
routes.use('/market', market);

export { routes }