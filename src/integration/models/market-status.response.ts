
export interface MarketStatusResponse {
    marketState: MarketState[];
}

export interface MarketState {
    market: string;
    marketStatus: string;
    tradeDate: string;
    index: string;
    last: any;
    variation: any;
    percentChange: any;
    marketStatusMessage: string;
}

