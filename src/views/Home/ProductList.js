import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import Product from './../../components/Product';
import { Row } from 'reactstrap';

class ProductList extends PureComponent {

    render() {
        const { products } = this.props;
        return (
            <Row>
                {
                    products.map(product => {
                        return <Product product={product} key={product._id} />
                    })
                }
            </Row>
        );
    }
}


ProductList.propTypes = {
    products: PropTypes.array,
};

export default ProductList;