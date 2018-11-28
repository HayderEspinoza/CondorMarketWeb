//import libraries
import React from 'react';
import { Field, reduxForm } from "redux-form";
import { REGEX } from '../config/constants';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Form } from 'reactstrap';
import InputForm from './../components/InputForm';

const validate = (values) => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Email required';
    }else if(!REGEX.email.test(values.email)){
        errors.email = 'Email invalid';
    }
    if (!values.password) {
        errors.password = 'Password required';
    } else if (values.password.length < 5) {
        errors.password = 'The password must be at least 5 characters';
    }
    return errors;
}

// create a component
const LoginForm = ({ submitLogin, handleSubmit, isOpen, cancel }) => {
    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>Sign in</ModalHeader>
            <ModalBody>
                <Form>
                    <Field name={'email'} component={InputForm} label={'Email'} type={'email'}/>
                    <Field name={'password'} component={InputForm} label={'Password'} type={'password'}/>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSubmit(submitLogin)}>Submit</Button>
                <Button color="default" onClick={cancel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

//make this component available to the app
export default reduxForm({ form: 'LoginForm', validate })(LoginForm);
