import React from "react";
import ItemModel from "../../models/Item";
// React bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Item Price
import ItemPrice from "./ItemPrice";
// Free Shipping
import FreeShipping from "./FreeShipping";
// Props
interface ItemProps {
    item: ItemModel
}
// List Item
const Item = (props: ItemProps) => {
    const { item } = props;
    return (
        <div className="item">
            <Container fluid>
                <Row>
                    <Col className="column-figure d-flex flex-column align-items-center align-items-lg-start">
                        <figure className="item-figure">
                            <a href={`/items/${item.id}`} title={item.title} aria-label={item.title}>
                                <img src={item.picture} alt={item.title} />
                            </a>
                        </figure>
                    </Col>
                    <Col className="column-description">
                        <Row>
                            <Col md="12" lg="8" className="d-flex flex-column align-items-center align-items-lg-start">
                                <div className="item-price-shipping">
                                    <span className="item-price">
                                        <ItemPrice price={item.price} />
                                    </span>
                                    {item.free_shipping &&
                                        <FreeShipping />
                                    }
                                </div>
                                <span className="item-title">
                                    <a href={`/items/${item.id}`} title={item.title} aria-label={item.title}>
                                        {item.title}
                                    </a>
                                </span>
                            </Col>
                            <Col md="12" lg="4" className="d-flex flex-column align-items-center align-items-lg-start">
                                <span className="item-location">
                                    {item.address}
                                </span>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Item;