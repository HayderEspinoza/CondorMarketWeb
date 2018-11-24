import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

class Filter extends PureComponent {
    render() {
        return (
            <Row>
                <Col>
                    <Row className="filter">
                        <Col>
                            <h4>Filters</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum iusto magni praesentium sint dolorum dolor placeat ad eligendi explicabo, quam accusamus consectetur in. Itaque deleniti aut eius a laudantium?
                            </p>
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