import { CartItem } from '../context/CartContext'

function saveCartItems(cartItems: CartItem[]) {
  localStorage.setItem('@RocketShoes:cart', JSON.stringify(cartItems))
}

function getCartItems(): CartItem[] {
  const storagedCartItems = localStorage.getItem('@RocketShoes:cart')
  return storagedCartItems ? JSON.parse(storagedCartItems) : []
}

export function removeFromCart(id: number) {
  const newCart = getCartItems()
  const itemIndex = newCart.findIndex((item) => item.id === id)

  if (itemIndex >= 0) {
    newCart.splice(itemIndex, 1)
    saveCartItems(newCart)
  }

  return newCart
}

function clearCart() {
  localStorage.clear()
  return []
}

export const CartItemStorage = {
  saveCartItems,
  getCartItems,
  removeFromCart,
  clearCart,
}
