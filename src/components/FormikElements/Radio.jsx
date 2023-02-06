import { ErrorMessage, FastField } from 'formik';
import PersonalError from './PersonalError';

const Radio = ({name, option, lable}) => {

    return (
        <div className="mb-3 col-6">
            <label htmlFor={name} className="form-label">{lable}</label>
            <FastField component='select' className="form-control" name={name} >
                {({field})=>{
                    return option.map(o =>{
                        return (
                                <label className='mx-4' key={o.id} >
                                    {o.value}
                                    <input className='form-check-input me-4' type="radio" 
                                    {...field} 
                                    value={o.id}
                                    />
                                </label>
                        )
                    })
                }}
            </FastField>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default Radio;
