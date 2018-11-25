import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row } from 'reactstrap';
import { TiMinus, TiPlus } from "react-icons/ti";
import { Link } from 'react-router-dom';
import ControlQuantity from './ControlQuantity';

const Product = () => {
    return (
        <Col md={6} lg={4} className={'product-wrap'}>
            <Card>
                <Link to="/products/1">
                    <CardImg top width="100%" src="https://tiendaenlinea.bavaria.co/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/r/b/rb_330_malta_leona_1.png" alt="Card image cap" />
                </Link>
                <CardBody>
                    <CardSubtitle>Pony Malta Leona 340 Mlt</CardSubtitle>
                    <div className={'wrap-price-quantity'}>
                        <span className={'price'}>$ 45.000</span>
                        <ControlQuantity />
                    </div>
                    <Button color={'danger'} size={'sm'} block>Add</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Product;