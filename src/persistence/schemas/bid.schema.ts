import { Schema } from "mongoose";
import { BidEntity } from "../entities/bid.entity";

const bidSchema = new Schema<BidEntity>({
    at: {
        type: Date
    },
    index: {
        type: String
    },
    direction: {
        type: String
    },
    difference: {
        type: String
    },
    user: {
        type: String
    }
});

export { bidSchema }
