import { CartItem } from '../context/CartContext'

function saveCartItems(cartItems: CartItem[]) {
  localStorage.setItem('@RocketShoes:cart', JSON.stringify(cartItems))
}

function getCartItems(): CartItem[] {
  const storagedCartItems = localStorage.getItem('@RocketShoes:cart')
  return storagedCartItems ? JSON.parse(storagedCartItems) : []
}

export const CartItemStorage = {
  saveCartItems,
  getCartItems,
}
