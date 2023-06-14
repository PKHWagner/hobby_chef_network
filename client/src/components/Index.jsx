import React from 'react';
import knives from '../img/knives.png'
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div>

      <div className='d-flex flex-column align-items-center'>
        <div className='m-5'>
          <div className='window1'>
            <h1>Hobby Chef Network</h1>
            <img src={knives} className='knives' alt="knives crossed" />
          </div>
        </div>
        <div className='m-5'>
          <div className='window1'>
            <h2><Link to={"/signin"}>Sign In</Link></h2>
            <h2><Link to={"/signup"}>Sign Up</Link></h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default index