import React, { PureComponent } from 'react';
import Header from './../../components/Header';
import { Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getShoppingCart } from '../../actions/products';
import { connect } from 'react-redux';

class MyOrders extends PureComponent {

    componentDidMount() {
        this.props.getShoppingCart()
    }
    

    render() {
        const { shopping_cart } = this.props
        return (
            <React.Fragment>
                <Header />
                <Row>
                    <Col sm={4}>
                        <h4>MY ORDERS</h4>
                        <FormGroup>
                            <Label for="exampleSelect">Order</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
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
                                    shopping_cart.map((product, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index}</th>
                                                <td>
                                                    <Link to={'products/1'}>{product.name}</Link>
                                                </td>
                                                <td>4</td>
                                                <td>$10.000</td>
                                                <td>$43.000</td>
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
        shopping_cart: state.ProductReducer.shopping_cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getShoppingCart: () => dispatch(getShoppingCart),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)