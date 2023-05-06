import React, { useState } from 'react';
import './signup.scss';
import { Link } from 'react-router-dom';

const formFieldArr = [
  {
    id: 1,
    name: "username",
    placeholder: "Username",
    type: "text"
  },
  {
    id: 2,
    name: "password",
    placeholder: "Password",
    type: "password"
  },
  {
    id: 3,
    name: "confirm-password",
    placeholder: "Confirm Password",
    type: "password"
  },
  {
    id: 1,
    name: "email",
    placeholder: "E-mail address",
    type: "email"
  }
]

const Signup = () => {
  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => { }
  const handleSubmit = () => { }
  return (
    <div className='signup'>
      <div className='form-container'>
        <div className='form-containerInner'>

          <div className='logo'>CodeQuiz</div>
          <form className='form'>
            {formFieldArr?.map(field => <div key={field?.id} className='form-input'>
              <label htmlFor={field?.name}></label>
              <input type={field?.type} id={field?.name} value={formData?.[field?.name]} name={field?.name} onChange={handleOnChange} placeholder={field?.placeholder} />
            </div>)}
            <div className='form-input'>
              <button className='submit-btn'>Sign Up</button>
            </div>
            <div className='custom-actions'>
              Have an account?
              <Link to={"/login"}>Sign In</Link>
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

export default Signup