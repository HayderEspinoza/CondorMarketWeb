import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { Row, Col, Button } from 'reactstrap';
import ControlQuantity from './../../components/ControlQuantity';
import { TiMinus } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';

class ProductDetail extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Row>
                    <Col sm={6}>
                        <img src={'https://tiendaenlinea.bavaria.co/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/c/l/club_col_330cc_x_30_n_2.png'} alt={'Pepsi'} width={'100%'}/>
                    </Col>
                    <Col sm={6}>
                        <h2>CLUB COL TW 330CC X 24 N - 3753</h2>
                        <div className={'wrap-price-quantity'}>
                            <h4>$ 45.000</h4>
                            <ControlQuantity />
                            <Button color={'danger'} size={'sm'}>
                                Add <TiPlus />
                            </Button>
                        </div>
                        <Row className={'wrap-products-list'}>
                            <Col sm={3} xs={3}>
                                <img src={'https://tiendaenlinea.bavaria.co/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/c/l/club_col_330cc_x_30_n_2.png'} alt={'Pepsi'} width={'100%'}/>
                            </Col>
                            <Col sm={3} xs={3}>
                                <img src={'https://tiendaenlinea.bavaria.co/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/c/l/club_col_330cc_x_30_n_2.png'} alt={'Pepsi'} width={'100%'} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

ProductDetail.propTypes = {

};

export default ProductDetail;