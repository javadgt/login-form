import { ErrorMessage, FastField } from 'formik';
import PersonalError from './PersonalError';

const Select = ({name, option, lable}) => {
    console.log();
    return (
        <div className="mb-3 col-6">
            <label htmlFor={name} className="form-label">{lable}</label>
            <FastField component='select' className="form-control" name={name} >
                {option.map(o=>{
                    return <option key={o.id} value={o.id}>{o.value}</option>
                })}
            </FastField>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default Select;
