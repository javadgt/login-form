import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from './FormikElements/PersonalError';

const FavoritsField = ({push, remove, form}) => {
    
    const favorits = form.values.favorits   
    // console.log(form    );

    // form.validateField('favorits')
    // form.validateForm()
    return (
        <>  
            <button className='btn btn-danger' type='button' onClick={()=>{
                // form.validateField('bio')
                // form.validateForm()
                // form.setFieldTouched('password')
                form.setTouched({
                    name : true,
                    email : true
                })
               
            }}>validateField</button>
            
            <label htmlFor="favorits" className="form-label">علایق</label>
            <i className='fas fa-plus-circle h3  mx-3 text-success pointer' onClick={()=>push('')}></i>
            {favorits?.map((f,i)=> (
                    <div key={i} className='reletive'>
                        <FastField type="text" className="form-control" name={`favorits[${i}]`} />
                        <ErrorMessage name={`favorits[${i}]`} component={PersonalError}/>
                        {favorits.length > 1 && <i onClick={()=>remove(i)} className='fas h5 fa-minus-circle absolute pointer  '></i>}
                    </div>
            ))}
        </>
    );
}

export default FavoritsField;
