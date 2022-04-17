import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SignInWithSocial from './SignInWithSocial/SignInWithSocial';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const handleEmail = event => {
        const emailValue = event.target.value;
        setEmail(emailValue)
    }
    const handlePassword = event => {
        const passwordValue = event.target.value;
        setPassword(passwordValue)
    }

    const handleLogin=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='container w-50 mx-auto border p-3 rounded mt-5 shadow'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <form onSubmit={handleLogin} className='w-75 mx-auto'>

                <div className="mb-3">
                    <input type="email" className="form-control fs-5" onBlur={handleEmail} id="exampleInputEmail1" placeholder='Email Address' required />
                </div>
                <div className="mb-3">
                    <input type="password" onBlur={handlePassword} className="form-control fs-5" id="exampleInputPassword1" placeholder='Password' required />
                </div>


                <button type="submit" className="btn btn-primary w-100 mx-auto fs-5">Login</button>
            </form>
            <p className='text-center mt-3'>If you new ? <Link className='text-primary text-decoration-none' to='/register'>Please Register</Link> </p>
            <SignInWithSocial />

        </div>
    );
};

export default Login;