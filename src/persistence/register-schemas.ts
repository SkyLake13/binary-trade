import { Connection } from "mongoose";
import { BidEntity } from "./entities/bid.entity";
import { bidSchema } from "./schemas/bid.schema";

function registerSchemas(connection: Connection) {
    const BidModel = connection.model<BidEntity>('bid', bidSchema, 'bid');

    return { BidModel };
}

export { registerSchemas }