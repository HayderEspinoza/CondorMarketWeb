import React, { PureComponent } from 'react';
import Header from './../../components/Header';
import { Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getShoppingCart } from '../../actions/products';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/orders';
import { moneyFormat } from './../../config/helpers';
import { Redirect } from "react-router-dom";

class MyOrders extends PureComponent {

    state = {
        products : []
    }

    componentDidMount() {
        this.props.getOrders()
    }

    _showProducts = (order) => {
        let orderSelected = this.props.orders.find(item => item._id === order)        
        this.setState({ products: orderSelected ? orderSelected.products : [] })
    }
    
    render() {
        const { orders, session } = this.props
        const { products } = this.state
        if(!session)
            return <Redirect to={{ pathname: "/" }} />
        
        return (
            <React.Fragment>
                <Header />
                <Row>
                    <Col sm={4}>
                        <h4>MY ORDERS</h4>
                        <FormGroup>
                            <Label for="order">Order</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={(event) => this._showProducts(event.target.value)}>
                                <option value={''}>Select order</option>
                                {
                                    orders.map(order => {
                                        return <option value={order._id} key={order._id}>{order.created_at}</option>
                                    })
                                }
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    <Link to={`/products/${item.product._id}`}>{item.product.name}</Link>
                                                </td>
                                                <td>{item.quantity}</td>
                                                <td>{moneyFormat(item.product.price, 0, '$')}</td>
                                                <td>{moneyFormat((item.product.price * item.quantity), 0, '$')}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        orders: state.OrderReducer.orders,
        session: state.UserReducer.session,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOrders: () => dispatch(getOrders),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)