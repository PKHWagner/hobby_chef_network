const RecipeController = require('../controllers/recipe.controller');

module.exports = (app) => {
  app.get('/api/recipes', RecipeController.getAll);
  app.get('/api/recipes/:id', RecipeController.getOne);
  app.post('/api/recipes/', RecipeController.createRecipe);
  app.patch('/api/recipes/:id', RecipeController.update);
  app.delete('/api/recipes/:id', RecipeController.delete);
}