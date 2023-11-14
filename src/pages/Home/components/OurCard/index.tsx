import { burguers } from '../../../../data/burguers'
import { CardBurguer } from '../BurguerCards'
import { BurguerList, Container } from './styled'

export function OurBurguer() {
  return (
    <Container>
      <h2>Nossos hambúrgueres</h2>
      <BurguerList>
        {burguers.map((burguer) => (
          <CardBurguer key={burguer.id} burguer={burguer} />
        ))}
      </BurguerList>
    </Container>
  )
}
