
 ### Context usando api json-server, não é necessário para o projeto pois optei por usar o localStorage
 
 ##### Mantive o código para estudo
 

``` tsx
  import { createContext, useEffect, useState } from 'react'
import { Burguers } from '../pages/Home/components/BurguerCards'
import { api } from '../lib/axios'

export interface CartItem extends Burguers {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (burguer: CartItem) => void
  changeQuantityCartCard: (id: number, type: 'increase' | 'decrease') => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getBurguersAPI: () => Promise<void>
  cartQuantity: number
  cartItemsTotal: number
  burguers: Burguers[]
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [burguers, setBurguers] = useState<Burguers[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  async function getBurguersAPI() {
    const response = await api.get('/burguers')
    setBurguers(response.data)
  }

  useEffect(() => {
    getBurguersAPI()
  }, [])

  // Adiciona a quantidade de um item no carrinho
  async function addQuantityInTheCart(burguer: CartItem) {
    try {
      const itemIndex = cartItems.findIndex((item) => item.id === burguer.id)

      const updatedItem = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + burguer.quantity,
      }

      const updateQuantityItem = await api.put(
        `/cartItems/${burguer.id}`,
        updatedItem,
      )

      setCartItems((state) =>
        state.map((item) =>
          item.id === burguer.id ? updateQuantityItem.data : item,
        ),
      )
    } catch (error) {
      console.error('Erro ao adicionar quantidade no carrinho:', error)
    }
  }

  // Adiciona um novo item no carrinho
  async function addNewItenInTheCart(burguer: CartItem) {
    try {
      const response = await api.post('/cartItems', burguer)
      setCartItems((state) => [...state, response.data])
    } catch (error) {
      console.error('Erro ao adicionar item no carrinho:', error)
    }
  }

  // Faz a verificação se o item já existe no carrinho e chama a função correta
  async function addToCart(burguer: CartItem) {
    const itemIndex = cartItems.findIndex((item) => item.id === burguer.id)

    if (itemIndex < 0) {
      addNewItenInTheCart(burguer)
    } else {
      addQuantityInTheCart(burguer)
    }
  }

  async function changeQuantityCartCard(
    id: number,
    type: 'increase' | 'decrease',
  ) {
    const itemIndex = cartItems.findIndex((item) => item.id === id)

    const updatedItem = {
      ...cartItems[itemIndex],
      quantity:
        type === 'increase'
          ? cartItems[itemIndex].quantity + 1
          : cartItems[itemIndex].quantity - 1,
    }

    const updateQuantityItem = await api.put(`/cartItems/${id}`, updatedItem)

    setCartItems((state) =>
      state.map((item) => (item.id === id ? updateQuantityItem.data : item)),
    )
  }

  async function removeFromCart(id: number) {
    try {
      await api.delete(`/cartItems/${id}`)
      setCartItems((state) => state.filter((item) => item.id !== id))
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error)
    }
  }

  const cartItemsTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  async function deleteAllCartItems() {
    try {
      await api.delete('/cartItems')
    } catch (error) {
      console.error('Erro ao deletar todos os itens do carrinho:', error)
    }
  }

  // Limpa o carrinho após a compra
  function clearCart() {
    setCartItems([])
    deleteAllCartItems()
  }

  async function fetchCartItems() {
    try {
      const response = await api.get('/cartItems')
      setCartItems(response.data)
    } catch (error) {
      console.error('Erro ao buscar itens do carrinho:', error)
    }
  }

  useEffect(() => {
    fetchCartItems()
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
        clearCart,
        getBurguersAPI,
        burguers,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
```
