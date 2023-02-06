import { FastField } from 'formik';
import React from 'react';



const PersonalField = ({field , meta, form, name, type}) => {
    const validation = (e)=>{
        form.handleChange(e)
        form.handleBlur(e)
    }
    return(
        <>

            <input type={type} className="form-control" name={name} value={form.values[name]}
            onChange={validation}
            onBlur={validation}
            />
            {/* <div className="text-danger">
                {meta.touched && meta.error && meta.error}
            </div> */}
        </>
        
    )
}

export default PersonalField;
