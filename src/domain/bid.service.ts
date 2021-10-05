import { Model } from "mongoose";
import { Bid } from "../api/routes/bid/bid.model";
import { CreateBid } from "../api/routes/bid/create-bid.model";
import { BidEntity } from "../persistence/entities/bid.entity";

class BidService {
    constructor(private readonly bidModel: Model<BidEntity, {}, {}>) { }

    public createBid(bid: CreateBid): Promise<BidEntity> {
        return this.bidModel.create({...bid});
    }

    public async getBids(): Promise<Bid[]> {
        return await this.bidModel.find().lean();
    }
}

export { BidService };