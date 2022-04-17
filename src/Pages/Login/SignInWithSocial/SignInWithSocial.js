import React from 'react';
import google from "../../../images/Social Logo/google.png"
import github from "../../../images/Social Logo/github.png"

const SignInWithSocial = () => {
    return (
        <div>
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

export default SignInWithSocial;