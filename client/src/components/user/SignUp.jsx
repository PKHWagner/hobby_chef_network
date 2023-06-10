import React from 'react';
import knives from '../../img/knives.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='App'>


      <div className='d-flex flex-column align-items-center'>
        <div className='m-5'>
          <div className='window1'>
            <h1>Hobby Chef Network</h1>
            <img src={knives} className='knives' alt="knives crossed" />
          </div>
        </div>

        <form action="" className='d-inline-flex'>

          <div className='window1'>
            <div className='mb-3 text-start'>
              <label htmlFor="firstName" className='form-label'>First Name:</label>
              <input type="text" className='form-control' name='firstName' id='firstName' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="lastName" className='form-label'>Last Name:</label>
              <input type="text" className='form-control' name='lastName' id='lastName' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="homeTown" className='form-label'>Home Town:</label>
              <input type="text" className='form-control' name='homeTown' id='homeTown' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="state" className='form-label'>State:</label>
              <input type="text" className='form-control' name='state' id='state' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="favoriteCuisine" className='form-label'>Favorite Cuisine:</label>
              <input type="text" className='form-control' name='favoriteCuisine' id='favoriteCuisine' />
            </div>
          </div>

          <div className='window1'>
            <div className='mb-3 text-start'>
              <label htmlFor="favoriteChef" className='form-label'>Favorite Chef:</label>
              <input type="text" className='form-control' name='favoriteChef' id='favoriteChef' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="email" className='form-label'>Email:</label>
              <input type="email" className='form-control' name='email' id='email' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="password" className='form-label'>Password:</label>
              <input type="password" className='form-control' name='email' id='password' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="confirmpassword" className='form-label'>Confirm Password:</label>
              <input type="password" className='form-control' name='confirmpassword' id='confirmpassword' />
            </div>
            <Link className='btn btn-outline-light me-2' to={'/'}>Cancel</Link>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
          </div>

        </form>
      </div>


    </div>
  )
}

export default SignUp