import React from "react";
import  { Price } from "../../models/Item";
// Props
interface ItemPriceProps {
    price: Price
}
// Item Price
const ItemPrice = (props: ItemPriceProps) => {
    const { price } = props;
    const getCurrency = (currency: string) => {
        let symbol = '$';
        if(currency.includes('ARS')){
            symbol = '$';
        }
        if(currency.includes('USD')){
            symbol = 'US$';
        }
        if(currency.includes('EUR')){
            symbol = '€';
        }
        // More Implementation
        return symbol;
    }
    const decimal = price.decimals.toString()
    const integer = (price.amount).toLocaleString().replace(',','.');

    return (
        <>
            <span className="price">
                <span className="price-currency">{getCurrency(price.currency)}</span>
                <span className="price-integer">{integer}</span>
                {price.decimals > 0 && <span className="price-decimal">{decimal.length === 1 ?  `${price.decimals}0` : price.decimals}</span>}
            </span>
        </>
    )
}

export default ItemPrice;