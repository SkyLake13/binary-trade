import { Schema } from "mongoose";
import { BidEntity } from "../entities/bid.entity";

const bidSchema = new Schema<BidEntity>({
    index: {
        name: {
            type: String
        },
        value: {
            type: Number
        }
    },
    bid: {
        direction: {
            type: String
        },
        difference: {
            type: String
        },
        amount: {
            type: Number
        },
        currency: {
            type: String
        },
    },
    time: {
        client: {
            type: Date
        },
        server: {
            type: Date
        }
    },
    user: {
        type: String
    }
});

export { bidSchema }
