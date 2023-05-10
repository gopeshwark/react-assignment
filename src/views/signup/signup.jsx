import React, { useState } from 'react';
import './signup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const formFieldArr = [
  {
    id: 1,
    name: "email",
    placeholder: "E-mail address",
    type: "email"
  },
  {
    id: 2,
    name: "password",
    placeholder: "Password",
    type: "password"
  },
  {
    id: 4,
    name: "role",
    placeholder: "Select Role...",
    type: "select",
    options: [{
      id: 4.1,
      label: "User",
      value: "user"
    },
    {
      id: 4.2,
      label: "Admin",
      value: "admin"
    }]
  }
]

const isValid = (data) => {
  return (data !== undefined && data !== "") ? true : false;
}


const Signup = () => {
  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => {
    let newFormData = formData;
    let key = e.target.name;
    newFormData = { ...formData, [key]: e.target.value }
    setFormData(newFormData);
  }

  const handleSubmit = () => {
    if (isValid(formData['email']) && isValid(formData['password']) && isValid(formData['role'])) {
      register();
    } else {
      alert("Please fill all data.")
    }
  }

  const register = () => {
    axios.post("http://localhost:3001/api/signup", formData).then(resp => {
      if (resp?.data) {
        setFormData({});
        alert(resp.data?.message);
      }
    })
  }

  return (
    <div className='signup'>
      <div className='form-container'>
        <div className='form-containerInner'>
          <div className='logo'>CodeQuiz</div>
          <form className='form'>
            {formFieldArr?.map(field => {
              if (field?.type !== "select") {
                return (
                  <div key={field?.id} className='form-input'>
                    <label htmlFor={field?.name} />
                    <input type={field?.type} id={field?.name} onChange={handleOnChange} value={formData?.[field?.name]} name={field?.name} onChange={handleOnChange} placeholder={field?.placeholder} />
                  </div>
                )
              } else {
                return (
                  <div key={field?.id} className='form-input'>
                    <label htmlFor={field?.name} />
                    <select name={field?.name} id={field?.name} value={formData?.[field?.name]} onChange={handleOnChange}>
                      <option value="">Select...</option>
                      {field?.options?.map(opt => <option key={opt?.id} value={opt?.value}>{opt?.label}</option>)}
                    </select>
                  </div>
                )
              }
            })}
          </form>
          <div className='form-input'>
            <button onClick={handleSubmit} className='submit-btn'>Sign Up</button>
          </div>
          <div className='custom-actions'>
            Have an account?
            <Link to={"/login"}>Sign In</Link>
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

export default Signup