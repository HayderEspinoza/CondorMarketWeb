//import liraries
import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

// create a component
const InputForm = (props) => {
    const { error, touched } = props.meta || false;
    const is_error = error && touched;
    const is_success = !error && touched;
    return (
        <React.Fragment>
            <FormGroup>
                <Label for={props.input.name}>{props.label}</Label>
                <Input 
                    invalid={is_error}
                    valid={is_success}
                    type={props.type} 
                    name={props.input.name} 
                    placeholder={props.label}
                    onChange={props.input.onChange}
                    onBlur={props.input.onBlur}
                    value={props.input.value}
                />
                <FormFeedback>{props.meta.error}</FormFeedback>
            </FormGroup>
        </React.Fragment>
    );
};

//make this component available to the app
export default InputForm;
