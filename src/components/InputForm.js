//import liraries
import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const adaptFileEventToValue = (handler) => ({ target: { files } }) => {
    console.log('files', files);
    handler(files.length ? { file: files[0], name: files[0].name } : null);
}

// create a component
const InputForm = ({
    meta: { error, touched },
    input: { value, onChange, onBlur, name },
    ph, type, label
}) => {    
    return (
        <React.Fragment>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Input 
                    invalid={error && touched}
                    valid={!error && touched}
                    type={type} 
                    name={name} 
                    placeholder={ph}
                    onChange={type === 'file' ? adaptFileEventToValue(onChange) : onChange}
                    onBlur={type === 'file' ? adaptFileEventToValue(onBlur) : onBlur}
                />
                <FormFeedback>{error}</FormFeedback>
            </FormGroup>
        </React.Fragment>
    );
};

//make this component available to the app
export default InputForm;
