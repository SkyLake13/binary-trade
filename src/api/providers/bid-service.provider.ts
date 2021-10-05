import { BidService } from '../../domain';
import { models } from './db-models.provider';

const bidService = new BidService(models.BidModel);

export { bidService }