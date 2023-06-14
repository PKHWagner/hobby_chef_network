import React, { useState } from 'react';
import axios from 'axios';
import knives from '../../img/knives.png';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const loginChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    })
  }

  const loginHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/login", loginInfo, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        navigate("/dashboard")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='App'>

      <div className='d-flex flex-column align-items-center'>
        <div className='m-5'>
          <div className='window1'>
            <h1>Hobby Chef Network</h1>
            <img src={knives} className='knife' alt="knives crossed" />
          </div>
        </div>
        <div className='window1'>
          <form action="" onSubmit={loginHandler}>

            <div className='mb-3 text-start'>
              <label htmlFor="email" className='form-label'>Email:</label>
              <input type="email" className='form-control' name='email' id='email' onChange={loginChangeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="password" className='form-label'>Password:</label>
              <input type="password" className='form-control' name='password' id='password' onChange={loginChangeHandler} />
            </div>
            <Link className='btn btn-outline-light me-2' to={'/'}>Cancel</Link>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default SignIn