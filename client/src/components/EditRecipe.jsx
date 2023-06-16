import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import knives from '../img/knives.png';

const EditRecipe = () => {

  const [recipeName, setRecipeName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [prep, setPrep] = useState();
  const [instructions, setInstructions] = useState();
  const [prepTime, setPrepTime] = useState();
  const [cookTime, setCookTime] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/' + id)
      .then(res => {
        console.log("CHECKING MY UPDATE GET--->", res)
        setRecipeName(res.data.recipeName);
        setDescription(res.data.description);
        setIngredients(res.data.ingredients);
        setPrep(res.data.prep);
        setInstructions(res.data.instructions);
        setPrepTime(res.data.prepTime);
        setCookTime(res.data.cookTime);
      })
      .catch(err => console.log("UPDATE GET IS NOT WORKING--->", err))
  }, [])

  const [errors, setErrors] = useState({});

  const recipeUpdateValidator = () => {
    let isValid = true
    if (recipeName.length < 3) {
      return false
    }
    if (description.length < 3 || description.length > 255) {
      return false
    }
    if (ingredients.length < 3) {
      return false
    }
    if (prep.length < 3) {
      return false
    }
    if (instructions.length < 3) {
      return false
    }
    return isValid
  }

  const update = (e) => {
    e.preventDefault();
    if (recipeUpdateValidator()) {
      axios.patch("http://localhost:8000/api/recipes/" + id, {
        recipeName,
        description,
        ingredients,
        prep,
        instructions,
        prepTime,
        cookTime
      })
        .then(res => {
          console.log("CHECKING RECIPES PATCH--->", res);
          navigate(`/recipe/${res.data._id}`)
        })
        .catch((err) => {
          console.log("SUBMIT HANDLER NOT WORKING--->", err)
        })
    } else {
      setErrors({
        recipeName: "Recipe Name must be at least 3 characters long!",
        description: "Description must be between 3 and 255 characters long!",
        ingredients: "Ingredients must be at least 3 characters long!",
        prep: "Prep must be at least 3 characters long!",
        instructions: "Instructions must be at least 3 characters long!"
      })
    }
  }

  return (
    <div>
      <div className='window1  mx-auto'>
        <h1>Hobby Chef Network</h1>
        <img src={knives} className='knives' alt="knives crossed" />
      </div>

      <form action="" className='window3 mx-auto mt-5' onSubmit={update}>


        <div className='shadow'>
          <label htmlFor="recipeName" className='form-label'>Recipe Name:</label>
          <input type="text" className='form-control' name='recipeName' id='recipeName' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
          {errors.recipeName ? <p className='text-danger'>{errors.recipeName}</p> : ""}
        </div>
        <div className='mt-3'>
          <label htmlFor="description" className='form-label'>Short Description:</label>
          <input type="text" className='form-control' name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
          {errors.description ? <p className='text-danger'>{errors.description}</p> : ""}
        </div>



        <div className=' d-inline-flex mt-3'>
          <div>
            <label htmlFor="ingredients" className='form-label'>Ingredients:</label>
            <textarea rows="10" cols="40" className='form-control' name='ingredients' id='ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
            {errors.ingredients ? <p className='text-danger'>{errors.ingredients}</p> : ""}
          </div>
          <div className='ms-3'>
            <label htmlFor="prep" className='form-label'>Prep List:</label>
            <textarea rows="10" cols="40" className='form-control' name='prep' id='prep' value={prep} onChange={(e) => setPrep(e.target.value)}></textarea>
            {errors.prep ? <p className='text-danger'>{errors.prep}</p> : ""}
          </div>
        </div>
        <div className='mt-3'>
          <label htmlFor="instructions" className='form-label'>Instructions:</label>
          <textarea rows="10" cols="80" className='form-control' name='instructions' id='instructions' value={instructions} onChange={(e) => setInstructions(e.target.value)}></textarea>
          {errors.instructions ? <p className='text-danger'>{errors.instructions}</p> : ""}
        </div>
        <div className='d-inline-flex mt-3'>
          <div>
            <label htmlFor="prepTime" className='form-label'>Prep Time:</label>
            <select className='form-control' name='prepTime' id='prepTime' value={prepTime} onChange={(e) => setPrepTime(e.target.value)}>
              <option value="">--Please choose Minutes--</option>
              <option value="0">0</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="75">75</option>
              <option value="90">90</option>
              <option value="105">105</option>
              <option value="120">120</option>
              <option value="135">135</option>
              <option value="150">150</option>
              <option value="165">165</option>
              <option value="180">180</option>
            </select>
          </div>
          <div className='ms-3'>
            <label htmlFor="cookTime" className='form-label'>Cook Time:</label>
            <select className='form-control' name='cookTime' id='cookTime' value={cookTime} onChange={(e) => setCookTime(e.target.value)}>
              <option value="">--Please choose Minutes--</option>
              <option value="0">0</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="75">75</option>
              <option value="90">90</option>
              <option value="105">105</option>
              <option value="120">120</option>
              <option value="135">135</option>
              <option value="150">150</option>
              <option value="165">165</option>
              <option value="180">180</option>
            </select>
          </div>
        </div>
        <div className='mt-3'>
          <Link className='btn btn-outline-light me-2' to={'/dashboard'}>Cancel</Link>
          <button type='submit' className='btn btn-outline-info'>Update</button>
        </div>

      </form>

    </div>
  )
}

export default EditRecipe