import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { IoMdCart } from "react-icons/io";
import { TiUser } from 'react-icons/ti';
import { Link } from 'react-router-dom';


class Header extends PureComponent {
    render() {
        return (
            <Row className={'header'}>
                <Col className={'brand'}>
                    <Link to={'/'}>
                        <h3>Condor Market</h3>
                    </Link>
                </Col>
                <Col className={'text-right'}>
                    <Link to={'/shopping-cart'} className={'icon-shoppin-cart'}>
                        <div className={'quantity-products'}>5</div>
                        <IoMdCart size={30} color={'#000'}/>
                    </Link>
                    <TiUser size={30} color={'#000'} />
                </Col>
            </Row>
        );
    }
}

Header.propTypes = {

};

export default Header;