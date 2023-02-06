import { ErrorMessage, FastField } from 'formik';
import PersonalError from './PersonalError';

const CheckBox = ({name, option, lable}) => {

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{lable}</label>
            <FastField component='select' className="form-control" name={name} >
                {({field})=>{
                    console.log(field);
                    return option.map(o => (
                            // <label className='mx-3' key={o.id} >
                            //     {o.value}
                            //     <input className='form-check-input me-2' type="checkbox" 
                            //     {...field} 
                            //     value={o.value}
                            //     />
                            // </label>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                {...field} 
                                value={o.value}
                                />
                                <label class="form-check-label" for="flexSwitchCheckDefault">{o.value}</label>
                            </div>
                        )
                    )
                }}
            </FastField>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default CheckBox;
