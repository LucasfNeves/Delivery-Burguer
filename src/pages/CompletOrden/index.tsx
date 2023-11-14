import { FormAddresSection } from './components/FormAddresSection'
import { ShoppingCarSection } from './components/ShoppingCarSection'
import { FormContainer } from './styles'

export function ShoppingCars() {
  return (
    <FormContainer>
      <FormAddresSection />
      <ShoppingCarSection />
    </FormContainer>
  )
}
