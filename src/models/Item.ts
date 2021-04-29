export class Price {
    currency = "NONE";
    amount: number = 0;
    decimals: number = 0;
}
export default class Item {
    id!: string;
    title!: string;
    description!: string;
    picture!: string;
    condition!: string;
    free_shipping: boolean = false;
    address!: string;
    // Price
    price!: Price;
    sold_quantity: number = 0;
}
