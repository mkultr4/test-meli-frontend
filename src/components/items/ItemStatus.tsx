import React from "react";
import Item from "../../models/Item";
// Props
interface ItemStatusProps {
    item: Item
}
// List Item
const ItemStatus = (props: ItemStatusProps) => {
    const { item } = props;
    const soldString  = (soldQuantity: number)=>{
        let description = 'Sin productos vendidos';
        
        if(soldQuantity === 1){
            description = `${item.sold_quantity} vendido`;
        }
        if(soldQuantity > 1){
            description = `${item.sold_quantity} vendidos`;
        }
        return description;
    }
    return (
        <div className="status-product">
            <span className="status">
                { item.condition.includes('new') ? 'Nuevo': 'Usado'}
            </span>
            <span className="sold">
                &nbsp;-&nbsp;{ soldString(item.sold_quantity)}
            </span>
        </div>
    )
}

export default ItemStatus;