import { SET_FEATURED, SetFeaturedAction, MovieState } from './types'

let initialState:MovieState = {}

export default function setFeaturedMovie(state= initialState, action: SetFeaturedAction) {
  switch (action.type) {
    case SET_FEATURED :
      return action.value
    default:
      return state;
  }
}

