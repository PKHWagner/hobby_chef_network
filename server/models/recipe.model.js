const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: [true, "Recipe Name is required!"],
    minlength: [3, 'Recipe Name must be at least 3 characters long!']
  },

  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [3, 'Description must be at least 3 characters long!'],
    maxLength: [255, 'Description cannot contain more than 255 characters!']
  },

  ingredients: {
    type: String,
    required: [true, "Ingredients is required!"],
    minlength: [3, 'Ingredients must be at least 3 characters long!']
  },

  prep: {
    type: String,
    required: [true, "Prep is required!"],
    minlength: [3, 'Prep must be at least 3 characters long!']
  },

  instructions: {
    type: String,
    required: [true, "Instructions is required!"],
    minlength: [3, 'Instructions must be at least 3 characters long!']
  },

  prepTime: {
    type: Number,
    required: [true, "Prep Time is required!"],
    enum: [
      0,
      15,
      30,
      45,
      60,
      75,
      90,
      105,
      120,
      135,
      150,
      165,
      180
    ]
  },

  cookTime: {
    type: Number,
    required: [true, "Cook Time is required!"],
    enum: [
      0,
      15,
      30,
      45,
      60,
      75,
      90,
      105,
      120,
      135,
      150,
      165,
      180
    ]
  }
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;