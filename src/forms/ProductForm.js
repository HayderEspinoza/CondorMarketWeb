//import libraries
import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Button, Col } from 'reactstrap';
import InputForm from './../components/InputForm';
import { } from 'reactstrap';
import { Row } from 'reactstrap';
import SelectForm from './../components/SelectForm';

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Name required';
    }
    if (!values.category) {
        errors.category = 'Category required';
    }
    if (!values.price) {
        errors.price = 'Price required';
    }
    if (!values.image) {
        errors.image = 'Image required';
    }
    return errors;
}

// create a component
const ProductForm = ({ submitForm, handleSubmit, product, cancel, categories }) => {
    return (
        <Row>
            <Col md={3}>
                <Field name={'name'} component={InputForm} ph={'Name'} type={'text'} />
            </Col>
            <Col md={3}>
                <Field name={'price'} component={InputForm} ph={'Price'} type={'number'} />
            </Col>
            <Col md={3}>
                <Field name={'category'} component={SelectForm} options={categories} type={'select'} label={'Category'}/>
            </Col>
            <Col md={3}>
                <Field name={'image'} component={InputForm} type={'file'} />
            </Col>
            <Col md={12}>
                <Button color="primary" onClick={handleSubmit(submitForm)}>Submit</Button>{' '}
                {/* {category && <Button color="default" onClick={() => cancel(null)}>Cancel</Button>} */}
            </Col>
        </Row>
    )
}

//make this component available to the app
export default reduxForm({ form: 'ProductForm', validate })(ProductForm);