import { createContext, useState } from 'react'
import { Burguers } from '../pages/Home/components/BurguerCards'

export interface CartItem extends Burguers {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (burguer: CartItem) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(burguer: CartItem) {
    const itemIndex = cartItems.findIndex((item) => item.id === burguer.id)

    // Cria uma cópia do carrinho atual
    const newCart = [...cartItems]

    if (itemIndex < 0) {
      // Se o item não estiver no carrinho, adiciona-o com uma quantidade inicial de 1.
      newCart.push({
        ...burguer,
        quantity: 1,
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
  }

  console.log(cartItems)

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
