import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Checkbox from '../../components/Checkbox';

class Filter extends PureComponent {
    
    render() {
        const { categories, handleFilter } = this.props;
        return (
            <Row>
                <Col>
                    <Row className="filter">
                        <Col>
                            <h5>Categories</h5>
                            <div className={'filter-content'}>
                                {
                                    categories.map(category => {
                                        return  <Checkbox 
                                                    {...category}
                                                    key={category._id} 
                                                    onChange={() => handleFilter(category)}
                                                />
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

Filter.propTypes = {
    categories: PropTypes.array,
};

export default Filter;