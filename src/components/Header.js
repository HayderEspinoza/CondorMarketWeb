import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { IoMdCart } from "react-icons/io";


class Header extends PureComponent {
    render() {
        return (
            <Row className={'header'}>
                <Col className={'brand'}>
                    <h3>Condor Market</h3>
                </Col>
                <Col className={'text-right'}>
                    <div className={'quantity-products'}>5</div>
                    <IoMdCart size={30} color={'#000'}/>
                </Col>
            </Row>
        );
    }
}

Header.propTypes = {

};

export default Header;