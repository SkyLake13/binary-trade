export interface CreateBid {
    at: Date,
    index: {
        name: string,
        value: number,
    },
    bid: {
        direction: string,
        difference: number,
        amount: number,
        currency: string
    },
    user: string
}