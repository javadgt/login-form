import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from './PersonalError';

const Textarea = ({ lable, name}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{lable}</label>
            <FastField className="form-control" name={name} component='textarea'/>
            <ErrorMessage name={name} component={PersonalError}/>
        </div>
    );
}

export default Textarea;
