import React from "react";
import ItemModel from "../../models/Item";
// React bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// Item Price
import ItemPrice from "./ItemPrice";
import ItemStatus from "./ItemStatus";
// Props
interface ItemDetailsProps {
    item: ItemModel
}
// Item Details
const ItemDetails = (props: ItemDetailsProps) => {
    const { item } = props;
    const handleOnClick = () => {
        alert('Not implemented');
    }
    const description = item.description && item.description !== '' ? item.description : 'Producto sin descripción';
    return (
        <div className="item-details">
            <Container fluid>
                <Row>
                    <Col lg="7">
                        <figure className="item-figure">
                            <img src={item.picture} alt={item.title} />
                        </figure>
                    </Col>
                    <Col lg="5">
                        <div className="p-5 p-lg-0 d-flex flex-column">
                            <div className="item-primary-information d-flex flex-column align-items-center align-items-lg-start">
                                {/* Status */}
                                <ItemStatus item={item}/>
                                {/* Title */}
                                <span className="item-title">
                                    {item.title}
                                </span>
                                {/* Price */}
                                <span className="item-price">
                                    <ItemPrice price={item.price} />
                                </span>
                                {/* Buy */}
                                <div className="mt-3 w-100">
                                    <Button variant="info" size="lg" block onClick={handleOnClick}>Comprar</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="10" className="d-flex flex-column align-items-center align-items-lg-start">
                        <span className="item-description-content">
                            <span className="item-description-content-title">Descripción del producto</span>
                            <p className="item-description-content-pargraph">{description}</p>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetails;