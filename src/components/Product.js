import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { TiMinus, TiPlus } from "react-icons/ti";

const Product = () => {
    return (
        <Col md={4} className={'product-wrap'}>
            <Card>
                <CardImg top width="100%" src="https://tiendaenlinea.bavaria.co/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/r/b/rb_330_malta_leona_1.png" alt="Card image cap" />
                <CardBody>
                    <CardSubtitle>Pony Malta Leona 340 Mlt</CardSubtitle>
                    <div className={'wrap-price-quantity'}>
                        <span className={'price'}>$ 45.000</span>
                        <div className={'wrap-quantity'}>
                            <span className={'minus-btn'} onClick={() => alert('Prueba')}>
                                <TiMinus size={10}/>
                            </span>
                            <span className={'quantity-label'}>4</span>
                            <span className={'plus-btn'}>
                                <TiPlus size={10}/>
                            </span>
                        </div>
                    </div>
                    <Button color={'danger'} size={'sm'} block outline>Add</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Product;