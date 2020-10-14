import { combineReducers } from 'redux'

import featuredMovie from './featuredMovie'
import myList from './myList'

export default combineReducers({
  featuredMovie,
  myList
})
