import { FormCompledYourRequest } from './components/FormAddres'
import { ShoppingCarSection } from './components/ShoppingCar'
import { FormContainer } from './styles'

export function ShoppingCars() {
  return (
    <FormContainer>
      <FormCompledYourRequest />
      <ShoppingCarSection />
    </FormContainer>
  )
}
