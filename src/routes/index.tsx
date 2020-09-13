import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import {Home, FilmDetails} from '../pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact >
        <Home />
      </Route>
      <Route path="/details" >
        <FilmDetails />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes
