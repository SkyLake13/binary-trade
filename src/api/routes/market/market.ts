import express from "express";
import { NSEClientProvider } from "../../providers/nse-client.provider";

const market = express.Router();

// Get all bids by user
market.get('/status', async (req, res, next) => {
    const user = (req as any).user;

    const marketStatus = await NSEClientProvider.getMarketStatus();

    res.send(marketStatus);
});

export { market };

