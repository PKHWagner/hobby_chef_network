import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import knives from '../img/knives.png'

const RecipeCard = () => {

  const [recipeDetail, setRecipeDetail] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/recipes/" + id)
      .then(res => {
        console.log(res);
        setRecipeDetail(res.data);
      })
      .catch(err => console.log("SOMETHING WENT WRONG WITH RECIPE GET--->", err))
  }, []);

  const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/recipes/" + id)
      .then(res => {
        navigate('/dashboard')
      })
      .catch(err => console.log("SOMETHING WENT WRONG WITH DELETE--->", err))
  }

  return (
    <div className='App'>


      <div className='window2 d-flex flex-row justify-content-center align-items-center'>
        <img src={knives} className='knives' alt="knives crossed" />
        <h1 className='mx-5'>Hobby Chef Network</h1>
        <img src={knives} className='knives' alt="knives crossed" />
      </div>

      <div className='recipeCard mt-5 mx-auto p-5'>
        <h2>{recipeDetail.recipeName}</h2>
        <h3>Ingredients:</h3>
        {/* figure out how to display like a list */}
        <p>{recipeDetail.ingredients}</p>
        <hr />
        <h3>Prep:</h3>
        <h4>Prep Time: {recipeDetail.prepTime} min.</h4>
        <p>{recipeDetail.prep}</p>
        <hr />
        <h3>Instructions:</h3>
        <h4>Cook Time: {recipeDetail.cookTime} min.</h4>
        <p>{recipeDetail.instructions}</p>
        <div className='mt-5'>
          <Link className='btn btn-outline-light me-2' to={'/dashboard'}>Dashboard</Link>
          <Link className='btn btn-outline-warning me-2' to={`/edit/${recipeDetail._id}`}>Edit</Link>
          <button className='btn btn-outline-danger' onClick={(e) => { deleteHandler(recipeDetail._id) }}>Delete</button>
        </div>
      </div>

    </div>
  )
}

export default RecipeCard