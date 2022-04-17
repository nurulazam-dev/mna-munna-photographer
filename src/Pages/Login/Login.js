import React from 'react';
import { Link } from 'react-router-dom';
import google from "../../images/Social Logo/google.png"
import github from "../../images/Social Logo/github.png"

const Login = () => {
    
    return (
        <div className='container w-50 mx-auto border p-3 rounded mt-5 shadow'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <form className='w-75 mx-auto'>
                
                <div className="mb-3">
                    <input type="email" className="form-control fs-5" id="exampleInputEmail1" placeholder='Email Address' required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control fs-5" id="exampleInputPassword1" placeholder='Password' required/>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 mx-auto fs-5">Login</button>
            </form>
            <p className='text-center mt-3'>If you new ? <Link className='text-primary text-decoration-none' to='/register'>Please Register</Link> </p>
            <p className='text-center'>If you forget password ?<button className='btn btn-link text-primary text-decoration-none'>Reset Password</button> </p>


            <div>
                <button className=' w-50 mx-auto rounded bg-primary d-block border-0 text-center mb-3'>
                    <img style={{ width: '30px' }} className='mb-1' src={google} alt="" />
                    <span className='fs-5 px-3 text-white'>Continue with Google</span>
                </button>
            </div>
            <div>
                <button className=' w-50 mx-auto rounded bg-primary d-block border-0 text-center '>
                    <img style={{ width: '30px' }} className='mb-1' src={github} alt="" />
                    <span className='fs-5 px-3 text-white'>Continue with Github</span>
                </button>
            </div>


        </div>
    );
};

export default Login;