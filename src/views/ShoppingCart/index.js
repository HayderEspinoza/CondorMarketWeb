import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import { Col, Row, Button, Modal, ModalHeader, ModalFooter, ModalBody, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { getShoppingCart, addProduct, removeProduct } from '../../actions/products';
import RowOrder from './RowOrder';
import { moneyFormat } from '../../config/helpers';
import { sendOrder } from './../../actions/orders';

class ShoppingCart extends PureComponent {


    state = {
        showMessage: false
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.order_created != nextProps.order_created){
            this.setState({ showMessage: true })
        }
    }
    
    

    render() {
        const { shopping_cart, addProduct, removeProduct, total, sendOrder } = this.props
        const { showMessage } = this.state
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
                                {
                                    shopping_cart.map((product, index) => {
                                        return  <RowOrder 
                                                    {...product} 
                                                    key={index} 
                                                    addProduct={addProduct} 
                                                    removeProduct={removeProduct}
                                                />
                                    })
                                }
                            </tbody>
                        </table>
                    </Col>
                    <Col md={3}>
                        <h4>ORDER SUMMARY</h4>
                        <table width={'100%'} className={'order-summary'}>
                            <thead>
                                <tr>
                                    <td>Total</td>
                                    <td className={'text-right'}>{ moneyFormat(total, 0, '$') }</td>
                                </tr>
                            </thead>
                        </table>
                        <Button 
                            color={'danger'} 
                            block 
                            onClick={sendOrder} 
                            disabled={!shopping_cart.length || total === 0}
                        >
                            Continue
                        </Button>
                        {showMessage &&
                            <Alert color="success" className={'mt-3'}>
                                Order created
                            </Alert>
                        }
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let total = 0
    let shopping_cart = state.ProductReducer.shopping_cart
    if (shopping_cart)
        shopping_cart.forEach(product => {
            total += product.quantity * product.data.price
        });
    return {
        shopping_cart: state.ProductReducer.shopping_cart,
        total: total,
        order_created: state.OrderReducer.order_created,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getShoppingCart: () => dispatch(getShoppingCart),
        addProduct: (product) => dispatch(addProduct(product)),
        removeProduct: (product) => dispatch(removeProduct(product)),
        sendOrder: () => dispatch(sendOrder)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)