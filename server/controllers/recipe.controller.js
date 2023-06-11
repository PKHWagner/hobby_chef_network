const Recipe = require('../models/recipe.model');

module.exports = {
  createRecipe: (req, res) => {
    Recipe.create(req.body)
    .then(newRecipe => res.status(201).json(newRecipe))
    .catch(err => res.status(400).json(err));
  },
  getAll: (req, res) => {
    Recipe.find()
    .then(allRecipes => res.json(allRecipes))
    .catch(err => res.status(400).json({msg:"COULD NOT GET ALL--->", err}));
  },
  getOne: (req, res) => {
    Recipe.findById(req.params.id)
    .then(oneRecipe => res.json(oneRecipe))
    .catch(err => res.status(400).json({msg: "COULD NOT GET ONE--->", err}));
  },
  update: (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then(updateRecipe => res.status(202).json(updateRecipe))
    .catch(err => res.status(400).json({msg: "COULD NOT UPDATE--->", err}));
  },
  delete: (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
    .then(deleteRecipe => res.status(202).json(deleteRecipe))
    .catch(err => res.status(400).json({msg: "COULD NOT DELETE--->", err}));
  }
}