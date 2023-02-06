import React from 'react';
import CheckBox from './CheckBox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

const FormikControl = (props) => {

    switch (props.control) {
        case 'input':
            return <Input {...props}/>

        case 'textarea':
            return <Textarea {...props}/>
            
        case 'select':
            return <Select {...props}/>
        
        case 'radio':
            return <Radio {...props}/>

        case 'checkbox':
            return <CheckBox {...props}/>
                   
        default:
            return <Input {...props}/>
    }
}

export default FormikControl;
