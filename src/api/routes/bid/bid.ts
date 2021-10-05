import express from "express";
import { bidService } from "../../providers/bid-service.provider";
import { CreateBid } from "./create-bid.model";

const bid = express.Router();

// initiate new bid
bid.post('', async (req, res, next) => {
    const user = (req as any).user;

    const bidData = req.body as CreateBid;

    const bid = await bidService.createBid(user.id, bidData);

    return res.status(200).send(bid);
});

// Get all bids by user
bid.get('', async (req, res, next) => {
    const user = (req as any).user;

    const bids = await bidService.getBids(user.id);

    return res.status(200).send(bids);
});

export { bid };

