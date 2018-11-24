import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Checkbox from '../../components/Checkbox';

class Filter extends PureComponent {
    render() {
        return (
            <Row>
                <Col>
                    <Row className="filter">
                        <Col>
                            <h5>Categories</h5>
                            <div className={'filter-content'}>
                                <Checkbox name={'Bebidas'} />
                                <Checkbox name={'Bebidas'} />
                                <Checkbox name={'Bebidas'} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

Filter.propTypes = {

};

export default Filter;