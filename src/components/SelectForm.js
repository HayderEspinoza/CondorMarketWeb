//import liraries
import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

// create a component
const SelectForm = (props) => {
    const { error, touched } = props.meta || false;
    const is_error = error && touched;
    const is_success = !error && touched;
    return (
        <React.Fragment>
            <FormGroup>
                <Input
                    invalid={is_error}
                    valid={is_success}
                    type={props.type}
                    name={props.input.name}
                    placeholder={props.ph}
                    onChange={props.input.onChange}
                    onBlur={props.input.onBlur}
                    value={props.input.value}
                >
                    <option value="">{props.label}</option>
                    {
                        props.options.map(item => {
                            return <option key={item._id} value={item._id}>{item.name}</option>
                        })
                    }
                </Input>
                <FormFeedback>{props.meta.error}</FormFeedback>
            </FormGroup>
        </React.Fragment>
    );
};

//make this component available to the app
export default SelectForm;
