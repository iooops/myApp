
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/constants'

export default function cart (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.id]

    case REMOVE_FROM_CART:
    	let ns = state.slice();
      ns.splice(ns.indexOf(action.id), 1)
      return ns

    default:
       return state
	}
}