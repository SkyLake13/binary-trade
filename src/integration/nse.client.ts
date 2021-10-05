import { AxiosInstance } from 'axios';
import { MarketStatusResponse } from './models/market-status.response';
import { NSEPaths } from './nse-paths';

class NSEClient {
    constructor(private readonly axios: AxiosInstance) { }

    public getMarketStatus() {
        const url = NSEPaths.MARKET_STATUS;
    
        return this.axios.get<MarketStatusResponse>(url);
    }
}


export { NSEClient }