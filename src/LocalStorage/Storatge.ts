/**
 * Funções para manipular o carrinho de compras usando o LocalStorage, mantive aqui para consulta.
 */

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

/**
 * Funnções que ficava no CartContext para manipular o carrinho de compras usando o LocalStorage e não estão mais sendo usadas. Mantive aqui para consulta.
 */

// function addToCart(burguer: CartItem) {
//   const itemIndex = cartItems.findIndex((item) => item.id === burguer.id)
//   // se a consulta retornar -1, significa que o item não está no carrinho.

//   // Cria uma cópia do carrinho atual
//   const newCart = [...cartItems]

//   if (itemIndex < 0) {
//     // Se o item não estiver no carrinho, adiciona-o com uma quantidade inicial de 1.
//     newCart.push({
//       ...burguer,
//       quantity: burguer.quantity,
//     })
//   } else {
//     // Se o item já estiver no carrinho, atualiza a quantidade.
//     newCart[itemIndex] = {
//       ...newCart[itemIndex],
//       quantity: newCart[itemIndex].quantity + burguer.quantity,
//     }
//   }
//   // Define o novo carrinho de compras.
//   setCartItems(newCart)
//   CartItemStorage.saveCartItems(newCart)
// }

// function changeQuantityCartCard(id: number, type: 'increase' | 'decrease') {
//   // Cria uma cópia do carrinho
//   const newCart = [...cartItems]

//   // Verifica se o item existe
//   const itemIndex = newCart.findIndex((item) => item.id === id)

//   if (itemIndex >= 0) {
//     const item = newCart[itemIndex]

//     if (type === 'increase') {
//       item.quantity = item.quantity + 1
//     } else if (type === 'decrease') {
//       item.quantity = item.quantity - 1
//     }
//   }

//   setCartItems(newCart)
// }

//! Usando o LocalStorage
// async function removeFromCart(id: number) {
//   const newCart = [...cartItems]
//   const itemIndex = newCart.findIndex((item) => item.id === id)

//   if (itemIndex >= 0) {
//     newCart.splice(itemIndex, 1)
//     setCartItems(newCart)
//   }
//   setCartItems(newCart)
//   localStorage.getItem('cartItems')
// }

//! Usando o LocalStorage
// useEffect(() => {
//   const storedCartItems = CartItemStorage.getCartItems()
//   if (storedCartItems) {
//     setCartItems(storedCartItems)
//   }
// }, [])
