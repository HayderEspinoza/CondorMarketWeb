import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Category from './../../components/Category';

class ListProducts extends PureComponent {
    render() {
        return (
            <Row>
                <Category />
            </Row>
        );
    }
}

ListProducts.propTypes = {

};

export default ListProducts;