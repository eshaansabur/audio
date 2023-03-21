import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 text-start ms-4'>
                <form className='ml-5'>
                        <div className="mb-3">
                            <h2 className='mt-3 mb-3'>Sign Up</h2>
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <br />
                            <input type="email" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <br />
                            <input type="password" className="form-control w-50" id="exampleInputPassword1"/>
                        </div>
                        <small className='mt-3 mb-3 linker'>If you have an account, please<Link to='/login'> login </Link> to continue</small>
                        <br/>
                        <br/>
                        <button type="submit" className="btn login-button px-5 text-white">Register</button>
                </form>
        </div>
    );
};

export default SignUp;