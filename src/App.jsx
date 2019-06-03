import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';
import './App.scss';
import './assets/css/style.scss';
import { RECIPES, HOME, CHEFS } from './routes';
import Recipes from './components/Recipes';
import Home from './components/Home';
import Chefs from './components/Chefs';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <div className="app-container__inner">
          <Switch>
            <Route exact path={`${HOME}`} component={Home} />
            <Route exact path={`${RECIPES}/:idRecipe`} component={Recipes} /> 
            <Route exact path={`${RECIPES}`} component={Recipes} /> 
            <Route exact path={`${CHEFS}/:idChef`} component={Chefs} /> 
            <Route exact path={`${CHEFS}`} component={Chefs} /> 
            <Route render={() => <h1>404 - No se encontró</h1>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;