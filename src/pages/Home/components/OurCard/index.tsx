import { CardBurguer } from '../BurguerCards'
import { BurguerContent, BurguerList, Container } from './styled'
import { burguers } from '../../../../../data/burguer'

export function OurBurguer() {
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
