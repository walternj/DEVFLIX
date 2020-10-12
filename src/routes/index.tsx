import React from "react"
import {
  Switch,
  Route,
} from "react-router-dom"

import { Home, FilmDetails, MyList } from '../pages'

const Routes = () => (
  <Switch>
    <Route path="/" exact >
      <Home />
    </Route>
    <Route path="/details" >
      <FilmDetails />
    </Route>
    <Route path="/mylist" >
      <MyList />
    </Route>
  </Switch>
)

export default Routes
