import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './../../components/Header';
import { Container, Col, Row } from 'reactstrap';
import Filter from './Filter';
import ListProducts from './ListProducts';

class Home extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Row className={'content'}>
                    <Col md={3}>
                        <Filter />
                    </Col>
                    <Col md={9}>
                        <ListProducts />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

Home.propTypes = {

};

export default Home;