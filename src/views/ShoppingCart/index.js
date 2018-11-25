import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { Col, Row, Button } from 'reactstrap';
import ControlQuantity from '../../components/QuantityControl';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

class ShoppingCart extends PureComponent {


    _renderProduct = () => {
        return (
            <tr>
                <td>
                    <Link to={'products/1'}>
                        Club Col Tw 330cc X 24 N - 3753
                    </Link>
                </td>
                <td>
                    <ControlQuantity />
                </td>
                <td>$54.565</td>
                <td>$345.234</td>
                <td className={'text-center'}>
                    <MdCancel color={'#999'} size={20} />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Row>
                    <Col md={9}>
                        <h3>ORDER</h3>
                        <table width={'100%'} className={'order-product-list'}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this._renderProduct() }
                            </tbody>
                        </table>
                    </Col>
                    <Col md={3}>
                        <h4>ORDER SUMMARY</h4>
                        <table width={'100%'} className={'order-summary'}>
                            <tr>
                                <td>Total</td>
                                <td className={'text-right'}>$456.342</td>
                            </tr>
                        </table>
                        <Button color={'danger'} block>Continue</Button>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

ShoppingCart.propTypes = {

};

export default ShoppingCart;