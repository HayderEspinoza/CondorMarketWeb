import React, { PureComponent } from 'react';
import Header from './../../components/Header';
import { Col, Row } from 'reactstrap';
import Filter from './Filter';
import ProductList from './ProductList';
import { connect } from "react-redux";
import { getCategories } from './../../actions/categories';
import { getProducts, setCategoryFilter } from './../../actions/products';

class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            category: null
        }
    }

    _filterByCategory = (data) => {
        this.props.setCategoryFilter(data)
    }

    componentDidMount() {
        // this.props.getCategories()
        // this.props.getProducts()
    }

    render() {
        const { categories, products } = this.props;
        return (
            <React.Fragment>
                <Header filter/>
                <Row className={'content'}>
                    <Col md={3}>
                        <Filter categories={categories} handleFilter={this._filterByCategory}/>
                    </Col>
                    <Col md={9}>
                        <ProductList products={products}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.CategoryReducer.categories,
        products: state.ProductReducer.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategories: () => dispatch(getCategories),
        getProducts: () => dispatch(getProducts),
        setCategoryFilter: (category) => dispatch(setCategoryFilter(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)