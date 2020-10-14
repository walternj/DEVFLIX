import { MyListState, SetMyListAction } from './types'
import { SET_MYLIST } from '../actions'

let initialState:MyListState
let myList: MyListState["myList"]
initialState = {myList}

export default function setMyList(state = initialState, action: SetMyListAction) {
  let nextState:any
  switch (action.type) {
    case SET_MYLIST:
      if(state?.myList === undefined || null) {
        nextState = {
          ...state,
          myList: [action.value]

        }
      } else {
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
      }
      return nextState || state
    default:
      return state;
  }
}
