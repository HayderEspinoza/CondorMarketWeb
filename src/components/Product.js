import React, { PureComponent } from 'react';
import { Col, Card, CardBody, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import QuantityControl from './QuantityControl';
import { moneyFormat } from '../config/helpers';
import { addProduct } from '../actions/products';
import { connect } from 'react-redux';

class Product extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            quantity: 0
        }
    }

    _increase = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    _decrease = () => {
        if (this.state.quantity > 0)
            this.setState({ quantity: this.state.quantity - 1 })
    }

    _addProduct = (product) => {
        const { quantity } = this.state
        this.props.addProduct({ product: product._id, quantity, data: product })
    }

    render(){
        const { product: { name, price, category, _id, fullImage } } = this.props
        const { quantity } = this.state
        return (
            <Col md={6} lg={4} className={'product-wrap'}>
                <Card>
                    <Link to={`/products/${_id}`}>
                        <div style={{ backgroundImage: `url('${fullImage}')`}} className={'center-image'}>&nbsp;</div>
                    </Link>
                    <CardBody>
                        <CardSubtitle className={'text-center'}>{name}</CardSubtitle>
                        <div className={'product-category'}>
                            {category.name}
                        </div>
                        <div className={'wrap-price-quantity'}>
                            <span className={'price'}>{moneyFormat(`${price}`, 0, '$')}</span>
                            <QuantityControl 
                                quantity={quantity}
                                decrease={this._decrease}
                                increase={this._increase}
                            />
                        </div>
                        <Button color={'danger'} size={'sm'} block onClick={() => this._addProduct(this.props.product)}>Add</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addProduct: (product) => dispatch(addProduct(product)),
    }
}

export default connect(null, mapDispatchToProps)(Product)