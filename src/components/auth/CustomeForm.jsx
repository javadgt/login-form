import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Login from './login/Login';
import Register from './Register';

const CustomeForm = () => {
    const [ formStatus, setFormStatus ] = useState('Register')

    const form = useRef()
    const front = useRef()

    const changeFormStatus = () =>{ 
        const newStatus = formStatus === 'login' ? 'Register' : 'login' 
        setFormStatus(newStatus)
        form.current.classList.toggle('toggle')
        // console.log(form.current.style.pointerEvents === '');

        if (front.current.style.pointerEvents === '' || front.current.style.pointerEvents === 'all') {
            front.current.style.pointerEvents = 'none'
            console.log(front.current.style.pointerEvents);
        }else {
            front.current.style.pointerEvents = 'all'
            console.log(front.current.style.pointerEvents);
        }
    }


    return (
        <div className="" style={{perspective: '1000px'}}
        >
            <div ref={form} className={`form position-relative`} style={{ transformStyle: 'preserve-3d', transition : '1s' }}>
                
                <div  className="login position-absolute top-0 start-0 bbttom-0 " style={{transform: 'rotateY(-180deg)', 'backface-visibility':'hidden'}}>
                    <Login changeFormStatus={changeFormStatus}/>
                </div>
                
                <div ref={front} className="register position-absolute top-0 start-0 bbttom-0 " style={{'backface-visibility':'hidden' }}>
                    <Register changeFormStatus={changeFormStatus}/>
                </div>                    
            
            </div>
        </div>
    );
}

export default CustomeForm;
