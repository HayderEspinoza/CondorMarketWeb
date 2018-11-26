import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import { IoMdCart } from "react-icons/io";
import { TiUser } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { connect } from 'react-redux';
import { searchProduct, getShoppingCart } from '../actions/products';

class Header extends PureComponent {

    componentDidMount() {
        this.props.getShoppingCart()
    }
    

    render() {
        const { searchProduct, shopping_cart, user } = this.props
        return (
            <Row className={'header'}>
                <Col className={'brand'}>
                    <Link to={'/'}>
                        <h3>Condor Market</h3>
                    </Link>
                </Col>
                <Col md={6} className={'d-none d-md-block'}>
                    <div className={'product-search'}>
                        <FaSearch color={'#b7b7b7'}/>
                        <input type="text" placeholder={'Search'} onChange={searchProduct}/>
                    </div>
                </Col>
                <Col className={'text-right'}>
                    <Link to={'/shopping-cart'} className={'icon-shoppin-cart'}>
                        <div className={'quantity-products'}>{shopping_cart.length}</div>
                        <IoMdCart size={30} color={'#000'}/>
                    </Link>
                    {
                        user &&
                        <Link to={'/my-orders'}>
                            <TiUser size={30} color={'#000'} />
                        </Link>
                    }
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        shopping_cart: state.ProductReducer.shopping_cart,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchProduct: (event) => dispatch(searchProduct(event.target.value)),
        getShoppingCart: () => dispatch(getShoppingCart),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)