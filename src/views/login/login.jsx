import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => { }
  const handleSubmit = () => { }
  return (
    <div className='login'>
      <div className='form-container'>
        <div className='form-containerInner'>

          <div className='logo'>CodeQuiz</div>
          <form className='form'>
            <div className='form-input'>
              <label htmlFor="username"></label>
              <input type="text" id='username' value={formData?.username} name='username' onChange={handleOnChange} placeholder='Username or E-mail' />
            </div>
            <div className='form-input'>
              <label htmlFor="password"></label>
              <input type="password" id='password' value={formData?.password} name='password' onChange={handleOnChange} placeholder='Password' />
            </div>
            <div className='form-input'>
              <button className='submit-btn'>Sign In</button>
            </div>
            <div className='custom-actions'>
              <Link to={"/forgot-password"}>Forgot Password?</Link>
              <Link to={"/signup"}>Sign Up</Link>
            </div>
          </form>
          {/* <div className='social-media'>
            <p>or you can signin with</p>
            <div className='social-mediaIcons'>

            </div>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Login