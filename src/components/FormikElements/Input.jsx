import { ErrorMessage, FastField } from 'formik';
import PersonalError from './PersonalError';
import PersonalField from './PersonalField';

const Input = ({name, type, lable, formik}) => {
    console.log(formik);
    return (
        // <div className="mb-3 col-6">
        //     <label htmlFor={name} className="form-label">{lable}</label>
        //     <FastField type={type}  className="form-control" name={name} >
        //         {p=><PersonalField {...p} name={name} type={type}/>}
        //     </FastField>
        //     <ErrorMessage name={name} component={PersonalError} />
        // </div>
        <div className="">
            <div class="inputBox">
                <FastField type={type} name={name} required className='text-dark'/>
                <span>{lable}</span>
                <i></i>
            </div>
            <div style={{height : 0}} className={`text-danger overflow-hidden transition ${formik?.errors[name] && formik.touched[name] ? 'show-error' : 'null' }`}>
                {formik?.errors[name]}
            </div>
        </div>
    );
}

export default Input;
