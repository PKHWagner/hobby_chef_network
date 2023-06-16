import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Dashboard from './components/Dashboard';
import RecipeCard from './components/RecipeCard';
import NewRecipeForm from './components/NewRecipeForm';
import EditRecipe from './components/EditRecipe';

function App() {

  const [allRecipes, setAllRecipes] = useState([]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path='/' />
          <Route element={<SignIn />} path='/signin' />
          <Route element={<SignUp />} path='/signup' />
          <Route element={<Dashboard allRecipes={allRecipes} setAllRecipes={setAllRecipes} />} path='/dashboard' />
          <Route element={<NewRecipeForm allRecipes={allRecipes} setAllRecipes={setAllRecipes} />} path='/recipe/form' />
          <Route element={<RecipeCard />} path='/recipe/:id' />
          <Route element={<EditRecipe />} path='/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
