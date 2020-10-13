import { combineReducers } from 'redux'

import featuredMovie from './featuredMovie'
import myList_reducer from './myList_reducer'

export default combineReducers({
  featuredMovie,
  myList_reducer
})
