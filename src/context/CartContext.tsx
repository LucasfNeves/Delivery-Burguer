import { createContext, useEffect, useState } from 'react'
import { Burguers } from '../pages/Home/components/BurguerCards'
import { CartItemStorage } from '../LocalStorage/Storatge'

export interface CartItem extends Burguers {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (burguer: CartItem) => void
  changeQuantityCartCard: (id: number, type: 'increase' | 'decrease') => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItemsTotal: number
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  function addToCart(burguer: CartItem) {
    const itemIndex = cartItems.findIndex((item) => item.id === burguer.id)
    // se a consulta retornar -1, significa que o item não está no carrinho.

    // Cria uma cópia do carrinho atual
    const newCart = [...cartItems]

    if (itemIndex < 0) {
      // Se o item não estiver no carrinho, adiciona-o com uma quantidade inicial de 1.
      newCart.push({
        ...burguer,
        quantity: burguer.quantity,
      })
    } else {
      // Se o item já estiver no carrinho, atualiza a quantidade.
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        quantity: newCart[itemIndex].quantity + burguer.quantity,
      }
    }
    // Define o novo carrinho de compras.
    setCartItems(newCart)
    CartItemStorage.saveCartItems(newCart)
  }

  function changeQuantityCartCard(id: number, type: 'increase' | 'decrease') {
    // Cria uma cópia do carrinho
    const newCart = [...cartItems]

    // Verifica se o item existe
    const itemIndex = newCart.findIndex((item) => item.id === id)

    if (itemIndex >= 0) {
      const item = newCart[itemIndex]

      if (type === 'increase') {
        item.quantity = item.quantity + 1
      } else if (type === 'decrease') {
        item.quantity = item.quantity - 1
      }
    }

    setCartItems(newCart)
    CartItemStorage.saveCartItems(newCart)
  }

  function removeFromCart(id: number) {
    const newCart = [...cartItems]
    const itemIndex = newCart.findIndex((item) => item.id === id)

    if (itemIndex >= 0) {
      newCart.splice(itemIndex, 1)
      setCartItems(newCart)
      CartItemStorage.saveCartItems(newCart)
    }
  }

  const cartItemsTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  useEffect(() => {
    const storedCartItems = CartItemStorage.getCartItems()
    if (storedCartItems) {
      setCartItems(storedCartItems)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartQuantity,
        changeQuantityCartCard,
        removeFromCart,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
