import React, { useState } from 'react';
import axios from 'axios';
import knives from '../../img/knives.png';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    homeTown: "",
    state: "",
    favoriteCuisine: "",
    favoriteChef: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const changeHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/register", userInfo, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        navigate('/dashboard');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='App'>


      <div className='d-flex flex-column align-items-center'>
        <div className='m-5'>
          <div className='window1'>
            <h1>Hobby Chef Network</h1>
            <img src={knives} className='knives' alt="knives crossed" />
          </div>
        </div>

        <form action="" className='d-inline-flex' onSubmit={submitHandler}>

          <div className='window1'>
            <div className='mb-3 text-start'>
              <label htmlFor="firstName" className='form-label'>First Name:</label>
              <input type="text" className='form-control' name='firstName' id='firstName' onChange={changeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="lastName" className='form-label'>Last Name:</label>
              <input type="text" className='form-control' name='lastName' id='lastName' onChange={changeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="homeTown" className='form-label'>Home Town:</label>
              <input type="text" className='form-control' name='homeTown' id='homeTown' onChange={changeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="state" className='form-label'>State:</label>
              <input type="text" className='form-control' name='state' id='state' onChange={changeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="favoriteCuisine" className='form-label'>Favorite Cuisine:</label>
              <input type="text" className='form-control' name='favoriteCuisine' id='favoriteCuisine' onChange={changeHandler} />
            </div>
          </div>

          <div className='window1'>
            <div className='mb-3 text-start'>
              <label htmlFor="favoriteChef" className='form-label'>Favorite Chef:</label>
              <input type="text" className='form-control' name='favoriteChef' id='favoriteChef' onChange={changeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="email" className='form-label'>Email:</label>
              <input type="email" className='form-control' name='email' id='email' onChange={changeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="password" className='form-label'>Password:</label>
              <input type="password" className='form-control' name='password' id='password' onChange={changeHandler} />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="confirmPassword" className='form-label'>Confirm Password:</label>
              <input type="password" className='form-control' name='confirmPassword' id='confirmPassword' onChange={changeHandler} />
            </div>
            <Link className='btn btn-outline-light me-2' to={'/'}>Cancel</Link>
            <button type='submit' className='btn btn-outline-primary'>Sign Up</button>
          </div>

        </form>
      </div>


    </div>
  )
}

export default SignUp