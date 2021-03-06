import React, { PureComponent } from 'react';
import { Row, Col, Table, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { getCategories } from './../../../actions/categories';
import { getProducts, createProduct, deleteProduct } from './../../../actions/products';
import ProductForm from '../../../forms/ProductForm';

class Products extends PureComponent {

    componentDidMount() {
        this.props.getCategories()
        this.props.getProducts()
    }

    _submit = (data) => {
        this.props.createProduct(data)
    }
    

    render() {
        const { products, categories, deleteProduct } = this.props
        return (
            <Row>
                <Col className={'mt-5'} xs={12}>
                    <Row>
                        <Col>
                            <h3>Products</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ProductForm 
                                categories={categories}
                                submitForm={this._submit}
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
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{product.name}</td>
                                                    <td>{product.category.name}</td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        <Badge color="danger" onClick={() => deleteProduct(product._id)}>Remove</Badge>{' '}
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
        ...state.ProductReducer,
        categories: state.CategoryReducer.categories,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategories: () => dispatch(getCategories),
        getProducts: () => dispatch(getProducts),
        createProduct: (data) => dispatch(createProduct(data)),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)