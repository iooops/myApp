

import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../constants/constants'

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}
