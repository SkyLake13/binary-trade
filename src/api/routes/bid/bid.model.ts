export interface Bid {
    id: string,
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
    time: {
        client: Date,
        server: Date
    },
    user: string
}