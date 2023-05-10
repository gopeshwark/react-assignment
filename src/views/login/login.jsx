import React, { useContext, useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth-context';

const isValid = (data) => {
  return (data !== undefined && data !== "") ? true : false;
}

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    let newFormData = formData;
    let key = e.target.name;
    newFormData = { ...formData, [key]: e.target.value }
    setFormData(newFormData);
  }

  const handleSubmit = () => {
    if (isValid(formData['email']) && isValid(formData['password'])) {
      handleLogin();
    } else {
      alert("Please fill all data.")
    }
  }

  const handleLogin = async (e) => {

    try {
      await login(formData)
      setFormData({});
      navigate("/problemset/all");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='login'>
      <div className='form-container'>
        <div className='form-containerInner'>

          <div className='logo'>CodeQuiz</div>
          <form className='form'>
            <div className='form-input'>
              <label htmlFor="email"></label>
              <input type="email" id='email' value={formData?.email} name='email' onChange={handleOnChange} placeholder='E-mail' />
            </div>
            <div className='form-input'>
              <label htmlFor="password"></label>
              <input type="password" id='password' value={formData?.password} name='password' onChange={handleOnChange} placeholder='Password' />
            </div>
          </form>
          <div className='form-input'>
            <button onClick={handleSubmit} className='submit-btn'>Sign In</button>
          </div>
          <div className='custom-actions'>
            Don't have an account?
            <Link to={"/signup"}>Sign Up</Link>
          </div>
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