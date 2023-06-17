import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import knives from '../img/knives.png'
import cutlery from '../img/cutlery.png'


const Dashboard = ({ allRecipes, setAllRecipes }) => {

  useEffect(() => {
    axios.get("http://localhost:8000/api/recipes")
      .then((res) => {
        console.log(res);
        setAllRecipes(res.data);
      })
      .catch((err) => {
        console.log("SOMETHING WENT WRONG WITH GET--->", err);
      })
  }, [])

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        navigate("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='App'>


      <div className='window2 d-flex flex-row justify-content-center align-items-center'>
        <img src={knives} className='knives' alt="knives crossed" />
        <h1 className='mx-5'>Hobby Chef Network</h1>
        <img src={knives} className='knives' alt="knives crossed" />
      </div>

      {/* Put user info here with link to update user */}

      <div className='row row-cols-md-3 g-4 p-5'>
        {/* This needs to become a carusel */}
        {
          allRecipes.map((data, index) => {
            return (
              <div className='col'>
                <div key={index} className='card h-100 bg-light bg-opacity-75 shadow-lg p-2 mt-5'>
                  <div className='card-body'>
                    <h5 className='card-title'><Link to={`/recipe/${data._id}`}>{data.recipeName}</Link></h5>
                    <p>{data.description}</p>
                    <div className='card-text'>
                      <img src={cutlery} alt="" className='cutlery' />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='d-flex flex-row justify-content-evenly align-items-baseline mt-5'>
        <div>
          <button className='btn btn-outline-light' onClick={logoutHandler}>Log Out</button>
        </div>
        <div>
          <Link to={'/recipe/form'} className='btn btn-outline-info'>Add a Recipe</Link>
        </div>
      </div>


    </div>
  )
}

export default Dashboard