import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from '../FormikElements/FormikControl';
import *  as Yup from 'yup'
import './login/login.css'

const initialValues = {
    email : '',
    password : '',
}

const validationSchema = Yup.object({
    email : Yup.string()
    .required('ایمیلتو بزن مو قشنگ')
    .matches( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'من خودم هاکرم پس درست بزن'),
    
    password : Yup.string()
    .required('رمزتو بزن مو قشنگ')
    .min(8,'بیشتر از 8 تا '),

})

const Login = ({ changeFormStatus }) => {

    return (
        <div class={`box position-relative overflow-hidden`}>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
            {formik => {
                console.log(formik);
                return (
                    <Form class="position-absolute">
                        <h2>ثبت نام کاربر</h2>
                
                        <FormikControl
                        type='input'
                        name='email'
                        lable=' ایمیل'
                        formik={formik}
                        />
                
                        <FormikControl
                        type='input'
                        name='password'
                        lable='رمز عبور'
                        formik={formik}
                        />


                        <div class="links mt-2">
                            <a href="#">رمز عبورتان را فراموش کردید؟</a>
                            <a href="#" className='h5' onClick={changeFormStatus}>ورود</a>
                        </div>
                        <button className='btn btn-info d-inline-block w-25 mt-2'>ثبت نام</button>
                    </Form>
                )
            }}
        </Formik>
    </div>
    );
}

export default Login;
