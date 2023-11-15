import { ShoppingCarContainer, ItensSelectedContainer } from './styled'
import { SelectedBurguer } from './components/SelectedBurguer'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { ConfirmOnderSection } from './components/ConfirmOnderSection'

export function ShoppingCarSection() {
  const { cartItems } = useContext(CartContext)
  return (
    <ShoppingCarContainer>
      <ItensSelectedContainer>
        {cartItems.map((item) => (
          <SelectedBurguer key={item.id} burguer={item} />
        ))}
      </ItensSelectedContainer>
      <ConfirmOnderSection />
    </ShoppingCarContainer>
  )
}
