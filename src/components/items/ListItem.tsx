import React from "react";
// Item
import Item from "./Item";
// Item Model
import ItemModel from "../../models/Item";
// Props
interface ListItemProps {
    items: Array<ItemModel>,
}
// List Item
const ListItem = (props: ListItemProps) => {
    const { items } = props;
    return (
        <div className="list-item">
            {items.map((item) => <Item key={item.id} item={item} />)}
        </div>
    )
}

export default ListItem;