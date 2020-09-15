import React from "react"
import {
  Switch,
  Route,
} from "react-router-dom"

import { Home, FilmDetails } from '../pages'

const Routes = () => (
  <Switch>
    <Route path="/" exact >
      <Home />
    </Route>
    <Route path="/details" >
      <FilmDetails />
    </Route>
  </Switch>
)

export default Routes
