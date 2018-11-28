import React, { PureComponent } from 'react';
import { Row, Col, Table, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { getCategories, removeCategory, addCategory, setCategory, updateCategory } from '../../../actions/categories';
import CategoryForm from '../../../forms/CategoryForm';
import { initialize, reset } from 'redux-form';

class Categories extends PureComponent {

    componentDidMount() {
        this.props.getCategories()
    }

    _submit = (data) => {
        const { addCategory, category, updateCategory } = this.props
        if(category){
            updateCategory(data)
        }else{
            addCategory(data)
        }
    }

    render() {
        const { categories, removeCategory, setCategory, category } = this.props
        return (
            <Row>
                <Col className={'mt-5'} xs={12}>
                    <Row>
                        <Col>
                            <h3>Categories</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <CategoryForm 
                                submitForm={this._submit} 
                                category={category}
                                cancel={setCategory}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'mt-3'}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{category.name}</td>
                                                    <td>{category.description}</td>
                                                    <td>
                                                        <Badge color="danger" onClick={() => removeCategory(category._id)}>Remove</Badge>{' '}
                                                        <Badge color="primary" onClick={() => setCategory(category)}>Edit</Badge>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.CategoryReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategories: () => dispatch(getCategories),
        removeCategory: (category) => dispatch(removeCategory(category)),
        addCategory: (data) => dispatch(addCategory(data)),
        setCategory: (category) => {
            dispatch(reset('CategoryForm', category))
            dispatch(setCategory(category))
        },
        updateCategory: (data) => dispatch(updateCategory(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)