import { MyListState } from './types'
import { SET_MYLIST } from '../actions'

let initialState:MyListState = {}

export default function setMyList(state = initialState, action) {
  let nextState
  switch (action.type) {
    case SET_MYLIST:

        console.log('actionID', action.value.id)
        const itemIndex = state.myList.findIndex(item => item.id === action.value.id)

        if(itemIndex !== -1) {
          nextState = {
            ...state,
            myList: state.myList.filter(element => (element.id !== action.value.id))
          }
        } else {
          nextState = {
            ...state,
            myList: [...state.myList, action.value]
          }
        }
      return nextState || state
    default:
      return state;

  }
}
