import { useFormik, Form, Formik, FastField, FieldArray ,ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import * as yup from 'yup'
import CustomeForm from './auth/CustomeForm';
import FavoritsField from './FavoritsField';
import FormikControl from './FormikElements/FormikControl';
import PersonalError from './FormikElements/PersonalError';
import PersonalField from './FormikElements/PersonalField';

const initialValues = {
    name : '',
    email : '',
    password : '',
    bio : '',
    address : {
        postalCode : '',
        city : ''
    },
    phone : ['',''],
    favorits : [''],
    education : '',
    gender: '',
    skills : ''
}

const validate = values =>{
    const errors = {}
    // email
    if (!values.email) {
        errors.email = 'باید پر بشه'
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email = 'email صحیح وارد کنید'
    }

    // name
    if (!values.name) {
        errors.name = 'باید پر بشه'
    }else if(values.name?.length < 5) {
        errors.name = '5 char'
    }
    
    // password
    if (!values.password) {
        errors.password = 'باید پر بشه'
    }else if(values.password?.length < 5) {
        errors.password = '5 char'
    }


    return errors

}

const onSubmit = (values, submitProps) =>{
    console.log(submitProps);
    setTimeout(() => {
        submitProps.setSubmitting(false)
        submitProps.resetForm()
        // submitProps.setValues({
        //     name : '',
        //     email : '',
        //     password : '',
        //     bio : '',
        //     address : {
        //         postalCode : '',
        //         city : ''
        //     },
        //     phone : ['',''],
        //     favorits : ['']
        // })
    }, 2000);
}

const validationSchema = yup.object({
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .max(10, 'Password should be of minimum 10 characters length')
      .required('Password is required')
      .matches()
      ,
    name : yup
    .string('Enter your name')
    .required('Enter your name')
    .min(6, 'more than 6')
    .max(10, 'more than 10'),

    bio : yup
    .string('Enter your bio')
    .required('Enter your bio')
    .min(10, 'more than 6'),

    address : yup.object({
        postalCode : yup
        .number()

        .required('Enter your postalCode')
        .min('100000', 'more than 10')
        // .max(15, 'more than 15')
        ,
        
        city : yup
        .string('Enter your city')
        .required('Enter your city')
        .min(6, 'more than 6'),
    }),

    phone : yup.array().of(yup.string('Enter your phone').required('Enter your phone')),

    favorits : yup.array().of(yup.string('Enter your favorit').required('Enter your favorit')),

    education : yup.string('Enter your city').required('Enter your city'),
    gender : yup.string('Enter your city').required('Enter your city'),
});


const validatePass = value=>{
    console.log(value);
    let error;
    if (!value) {
        error = 'ورود این فیلد اجباری...!'
    }else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
        error = 'لطفا قالب نوشتاری را رعایت کنید...!'
    }else if(value.length < 5){
        error = '5 char'
    }
    return error;
}

const education = [
    {id : 1, value : "ابتدایی"},
    {id : 2, value : "سیکل"},
    {id : 3, value : "دیپلم"},
    {id : 4, value : "لیسانس"},
]

const gender = [
    {id : 1, value : "مرد"},
    {id : 2, value : "زن"},
]

const skills = [
    {id : 1, value : "HTML"},
    {id : 2, value : "CSS"},
    {id : 3, value : "JS"},
    {id : 4, value : "REACT"},
]
const Registerform = () => {
    // const formik = useFormik({
    //     initialValues,
    //     // validate,
    //     onSubmit,
    //     validationSchema
    // })
    // console.log(formik);

    // console.log(formik.getFieldProps('name'));

    // const val = (e)=>{
    //     formik.handleChange(e)
    //     formik.handleBlur(e)
    // }
    const [formData, setFormData] = useState(null)
    
    const [myValues, setMyValues] = useState(JSON.parse(localStorage.getItem('formData')))
    // const [formData, setFormData] = useState(null)



    const handleSaveData = ( formik )=> {
        localStorage.setItem('formData' , JSON.stringify(formik.values))
    } 
    const handleGetData = ( formik )=> {
        const savedData = JSON.parse(localStorage.getItem('formData'))
        formik.setValues(savedData)
        setFormData(savedData)
        formik.setTouched({
            name : true,
            email : true,
            password : true,
            bio : true,
            address : {
                postalCode : true,
                city :true
            },
            phone : true,
            favorits : true
        })
        // formik.validateForm()
        console.log(formik);
        // console.log(savedData);
    } 


    return (
        <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
            {/* <CustomeForm/> */}
                <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                // enableReinitialize
                // validateOnBlur={false}
                // validateOnChange={false}
                validateOnMount
                >
                    {propsForm=>{
                        console.log(propsForm);

                        return <Form className='row'>
                        <h1 className='text-center'>
                            <i className='fas fa-user-plus text-primary'></i>
                        </h1>

                        <FormikControl
                        control= 'input'
                        type= 'text'
                        lable= 'نام'
                        name= 'name'
                        />

                        {/* <div className="mb-3 col-6">
                            <label htmlFor="name" className="form-label">نام</label>
                            <FastField type="text" className="form-control" name='name' >
                                {p=><PersonalField {...p}/>}
                            </FastField>
                            <ErrorMessage name='name' component={PersonalError} />
                        </div> */}

                        <FormikControl
                        control= 'input'
                        type= 'email'
                        lable= 'ایمیل'
                        name= 'email'
                        />

                        {/* <div className="mb-3 col-6">
                            <label htmlFor="email" className="form-label">ایمیل</label>
                            <FastField type="email" className="form-control" name='email' />
                            <ErrorMessage name='email' component={PersonalError}/>
                        </div> */}


                        <FormikControl
                        control= 'input'
                        type= 'password'
                        lable= 'رمز عبور'
                        name= 'password'
                        />
                        {/* <div className="mb-3">
                            <label htmlFor="password" className="form-label">رمز عبور</label>
                            <FastField type="password" className="form-control" name='password'
                            validate={validatePass}
                            />
                            <ErrorMessage name='password'/>
                        </div> */}


                        <FormikControl
                        control= 'textarea'
                        lable= 'بیوگرافی'
                        name= 'bio'
                        />
                        {/* <div className="mb-3">
                            <label htmlFor="bio" className="form-label"> بیوگرافی</label>
                            <FastField type="text" className="form-control" name='bio' component='textarea'
                            validate={validatePass}
                            ></FastField>
                            <ErrorMessage name='bio'/>
                        </div> */}


                        {/* <div className="mb-2">
                            <label htmlFor="password" className="form-label">بیوگرافی</label>
                            <FastField type="text" className="form-control" id="bio" name='bio' component="textarea"
                            validate={validatePass}
                            />
                            <ErrorMessage name='bio' component={PersonalError}/>
                        </div> */}


                        <FormikControl
                        control= 'input'
                        type= 'text'
                        lable= 'کد پستی'
                        name= 'address.postalCode'
                        />
                        {/* <div className="mb-3 col-6">
                            <label htmlFor="postalCode  " className="form-label">کد پستی</label>
                            <FastField type="text" className="form-control" name='address.postalCode' />
                            <ErrorMessage name='address.postalCode' component={PersonalError}/>
                        </div> */}

                        <FormikControl
                        control= 'input'
                        type= 'text'
                        lable= 'شهر'
                        name= 'address.city'
                        />                        

                        {/* <div className="mb-3 col-6">
                            <label htmlFor="city" className="form-label">شهر</label>
                            <FastField type="text" className="form-control" name='address.city' />
                            <ErrorMessage name='address.city' component={PersonalError}/>
                        </div> */}

                        <FormikControl
                        control= 'input'
                        type= 'text'
                        lable= 'تلفن همراه'
                        name= 'phone[0]'
                        /> 
                        {/* <div className="mb-3 col-6">
                            <label htmlFor="mobilePhone" className="form-label">تلفن همراه</label>
                            <FastField type="text" className="form-control" name='phone[0]' />
                            <ErrorMessage name='phone[0]' component={PersonalError}/>
                        </div> */}

                        <FormikControl
                        control= 'input'
                        type= 'text'
                        lable= 'تلفن ثابت'
                        name= 'phone[1]'
                        /> 
                        {/* <div className="mb-3 col-6">
                            <label htmlFor="telePhone" className="form-label">تلفن ثابت</label>
                            <FastField type="text" className="form-control" name='phone[1]' />
                            <ErrorMessage name='phone[1]' component={PersonalError}/>
                        </div> */}


                        <FormikControl
                        control= 'select'
                        lable= 'تحصیلات'
                        name= 'education'
                        option={education}
                        /> 

                        <FormikControl
                        control= 'radio'
                        lable= 'جنسیت'
                        name= 'gender'
                        option={gender}
                        /> 

                        <FormikControl
                        control= 'checkbox'
                        lable= 'مهارت'
                        name= 'skills'
                        option={skills}
                        />


                        <div className="mb-3">
                            <FieldArray name='favorits'>
                                {props => <FavoritsField {...props}/>}
                            </FieldArray>
                        </div>
                        

                        <div className='text-center w-100'>
                            <button type="submit" className="btn btn-primary "
                            disabled={!propsForm.isValid || propsForm.isSubmitting}
                            >
                            {propsForm.isSubmitting ? (
                                <div className="spinner-border text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : ' ثبت نام'}    
                           </button>
                           
                            {(propsForm.dirty && propsForm.isValid) && (
                                <>
                                    <button type='button' className='btn btn-danger mx-2'
                                    onClick={()=>handleSaveData(propsForm)}
                                    >ذخیره داده ها در سیستم</button>
                                </>
                            )}

                            {myValues && (
                                <button type='button' className='btn btn-danger mx-2'
                                onClick={()=>handleGetData(propsForm)}
                                >ذریافت داده از سیستم</button>
                            )}

                      


                        </div>
                    </Form>
                    }}
                </Formik>
                </div>
            </div>
        </div>
    );
}

export default Registerform;
