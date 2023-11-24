import { useContext } from 'react'
import { CardBurguer } from '../BurguerCards'
import { BurguerContent, BurguerList, Container } from './styled'
import { CartContext } from '../../../../context/CartContext'

export function OurBurguer() {
  const { burguers } = useContext(CartContext)
  return (
    <Container>
      <BurguerContent>
        <h2>Nossos hambúrgueres</h2>
        <BurguerList>
          {burguers.map((burguer) => (
            <CardBurguer key={burguer.id} burguer={burguer} />
          ))}
        </BurguerList>
      </BurguerContent>
    </Container>
  )
}
