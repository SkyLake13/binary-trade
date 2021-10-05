import { Model } from "mongoose";
import { Bid } from "../api/routes/bid/bid.model";
import { CreateBid } from "../api/routes/bid/create-bid.model";
import { BidEntity } from "../persistence/entities/bid.entity";

class BidService {
    constructor(private readonly bidModel: Model<BidEntity, {}, {}>) { }

    public createBid(userId: string, bid: CreateBid): Promise<BidEntity> {
        if(!userId) {
            throw new Error('User not found.');
        }
        return this.bidModel.create({...bid});
    }

    public async getBids(user: string): Promise<Bid[]> {
        return await this.bidModel.find({ user: user }).lean();
    }
}

export { BidService };