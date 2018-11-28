import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import { Row, Col, Button } from 'reactstrap';
import { TiPlus } from 'react-icons/ti';
import QuantityControl from './../../components/QuantityControl';
import { getProduct, addProduct } from '../../actions/products';
import { connect } from 'react-redux';
import { moneyFormat } from './../../config/helpers';

class ProductDetail extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 0
        }
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id)
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

    render() {
        const { quantity } = this.state
        const { product } = this.props
        console.log('product', product);
        
        return (
            <React.Fragment>
                <Header />
                {
                    product ?
                    <Row>
                        <Col sm={6}>
                            <img src={product.fullImage} alt={product.name} width={'auto'} height={700} className={'product-image'}/>
                        </Col>
                        <Col sm={6}>
                            <h2 className={'text-center'}>{ product.name }</h2>
                            <div className={'wrap-price-quantity'}>
                                <h4>{ moneyFormat(product.price, 0, '$') }</h4>
                                <QuantityControl
                                    quantity={quantity}
                                    decrease={this._decrease}
                                    increase={this._increase}
                                />
                                <Button color={'danger'} size={'sm'} onClick={() => this._addProduct(product)}>
                                    Add <TiPlus />
                                </Button>
                            </div>
                            <Row>
                                <Col sm={3} xs={3} className={'product-image'}>
                                    <img src={product.fullImage} alt={product.name} width={'100%'} />
                                </Col>
                            </Row>
                        </Col>
                    </Row> :
                    <p>Loading ...</p>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.ProductReducer.product,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProduct: (id) => dispatch(getProduct(id)),
        addProduct: (product) => dispatch(addProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)