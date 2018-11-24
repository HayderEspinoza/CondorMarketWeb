import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Product from './Product';

class Category extends PureComponent {
    render() {
        return (
            <Col>
                <h4 className={'underline'}>Bebidas</h4>
                <Row>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Row>
            </Col>
        );
    }
}

Category.propTypes = {

};

export default Category;