import { SetFeaturedAction, MovieState } from './types'
import { SET_FEATURED } from '../actions'

let initialState:MovieState = {}

export default function setFeaturedMovie(state= initialState, action: SetFeaturedAction): MovieState {
  switch (action.type) {
    case SET_FEATURED :
      return action.value
    default:
      return state;
  }
}

