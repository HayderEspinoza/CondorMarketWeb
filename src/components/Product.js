import React, { PureComponent } from 'react';
import { Col, Card, CardImg, CardBody, CardSubtitle, Button } from 'reactstrap';
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
        this.props.addProduct({ product, quantity })
    }

    render(){
        const { product: { name, price, category, _id } } = this.props
        const { quantity } = this.state
        return (
            <Col md={6} lg={4} className={'product-wrap'}>
                <Card>
                    <Link to="/products/1">
                        <CardImg top width="100%" src="https://tiendaenlinea.bavaria.co/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/r/b/rb_330_malta_leona_1.png" alt="Card image cap" />
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
                        <Button color={'danger'} size={'sm'} block onClick={() => this._addProduct(_id)}>Add</Button>
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