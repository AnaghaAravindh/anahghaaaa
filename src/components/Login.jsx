import React, { useState } from 'react'
import './Login.css';

const Login = (props) => {
    const [mail, SetMail] = useState('')
    const [pass, SetPass] = useState('')
    const [error, SetError] = useState(false)

    const ReadEmail = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        SetMail(event.target.value);
    }
    const ReadPass = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        SetPass(event.target.value);
    }
    const CheckError = (event) => {
        event.preventDefault();
        if (mail.trim() === '' ) {
            SetError(true);
            return;
        }
        if(pass.length<8){
            SetError("password must be 8 characters");
            return;
        }
        
        const myobj = {
            e: mail,
            p: pass,
        }
        console.log(myobj)
        props.onLogin(mail, pass);
    }
    return (
        <div align='center'  className='head'>
            <h1 className='text'>Login</h1>
            <form className='bg'>
                Email:<input type='text' onChange={ReadEmail} name='em' id='e1' />
                <br></br>
                Password:<input type='text' onChange={ReadPass} name='pw' id='p1' />
                <br></br>
                <button className='button' type='submit' onClick={CheckError}>Login</button>
                <br></br>
                <p className='error'> {error}</p>
            </form>
        </div>
    )
}

export default Login
