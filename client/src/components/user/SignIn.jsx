import React from 'react';
import knives from '../../img/knives.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='App'>

      <div className='d-flex flex-column align-items-center'>
        <div className='m-5'>
          <div className='window1'>
            <h1>Hobby Chef Network</h1>
            <img src={knives} className='knives' alt="knives crossed" />
          </div>
        </div>
        <div className='window1'>
          <form action="">

            <div className='mb-3 text-start'>
              <label htmlFor="email" className='form-label'>Email:</label>
              <input type="email" className='form-control' name='email' id='email' />
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="password" className='form-label'>Password:</label>
              <input type="password" className='form-control' name='password' id='password' />
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