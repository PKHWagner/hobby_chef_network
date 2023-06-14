import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import knives from '../img/knives.png';

const NewRecipeForm = ({ allRecipes, setAllRecipes }) => {


  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prep, setPrep] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const formValidator = () => {
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValidator()) {
      axios.post("http://localhost:8000/api/recipes", {
        recipeName,
        description,
        ingredients,
        prep,
        instructions,
        prepTime,
        cookTime
      })
        .then(res => {
          console.log("CHECKING RECIPES POST--->", res);
          setAllRecipes([...allRecipes, res.data]);
          navigate(`/recipes/${res.data._id}`)
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

      <form action="" className='window3 d-inline-flex'>
        <div>

        </div>

      </form>


    </div>
  )
}

export default NewRecipeForm