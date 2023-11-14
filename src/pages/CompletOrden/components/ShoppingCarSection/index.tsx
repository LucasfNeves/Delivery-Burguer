import { ShoppingCarContainer, ItensSelectedContainer } from './styled'
import { SelectedBurguer } from '../SelectedBurguer'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { ConfirmOnderSection } from '../ConfirmOnderSection'

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
