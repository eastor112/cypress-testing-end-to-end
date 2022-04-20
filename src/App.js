import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Grid from '@mui/material/Grid';

import Recipe from "./components/Recipe";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);

  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getData();
    setQuery(""); //to reset the input text
  }, [search]); //gets executed when the page renders



  const handleChange = (event) => {
    //console.log(event.target.value);
    setQuery(event.target.value);
    console.log(query);
  }

  const handleClick = (event) => {
    event.preventDefault(); //to prevent the page (form) refresh
    setSearch(true);
  }

  const getData = async () => {
    const URL_BASE = 'https://api.edamam.com/search';
    const credentials = `app_id=${APP_ID}&app_key=${APP_KEY}`;
    const queryString = `${query ? `q=${query}` : 'q=mint'}`;
    const URL = `${URL_BASE}?${credentials}&${queryString}`;

    const response = await fetch(URL);
    const data = await response.json();
    const items = data.hits;

    setRecipes(items);
  }

  return (
    <div>
      <Header />
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <form onSubmit={handleClick} data-cy='form'>
          <TextField id="outlined-basic" label="Food Item" type="text" value={query} onChange={handleChange} />
          <Button data-cy='button' variant="contained" color="secondary" onClick={handleClick}>
            <SearchOutlinedIcon />
          </Button>
        </form>
        {recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            mealType={recipe.recipe.mealType}
            calories={recipe.recipe.calories}
            dishType={recipe.recipe.dishType}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
      </Grid>
      <Footer />
    </div>
  )

}

export default App;
