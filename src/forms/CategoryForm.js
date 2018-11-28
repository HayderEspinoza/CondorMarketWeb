//import libraries
import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Button, Col } from 'reactstrap';
import InputForm from './../components/InputForm';
import {  } from 'reactstrap';
import { Row } from 'reactstrap';

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Name required';
    } 
    return errors;
}

// create a component
const CategoryForm = ({ submitForm, handleSubmit, category, cancel }) => {
    return (
        <Row> 
            <Col md={4}>
                <Field name={'name'} component={InputForm} ph={'Name'}type={'text'} />
            </Col>
            <Col md={5}>
                <Field name={'description'} component={InputForm} ph={'Description'} type={'text'} />
            </Col>
            <Col md={2}>
                <Button color="primary" onClick={handleSubmit(submitForm)}>Submit</Button>{' '}
                { category && <Button color="default" onClick={() => cancel(null)}>Cancel</Button> }
            </Col>
        </Row>
    )
}

//make this component available to the app
export default reduxForm({ form: 'CategoryForm', validate })(CategoryForm);