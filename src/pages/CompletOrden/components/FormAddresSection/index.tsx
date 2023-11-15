import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  FillYourRequestContainer,
  SectionFormAddress,
  TitleSectionFormAddress,
} from './components/AdressForm/styled'
import { PaymentContainer, TitlePayment } from './styled'
import { PayamentMethodOptions } from './components/PaymentMethodo'
import { FormAddresSection } from './components/AdressForm'

export function CompleteOrderForm() {
  return (
    <FillYourRequestContainer>
      <SectionFormAddress>
        <TitleSectionFormAddress>
          <span>
            <MapPinLine />
            <p>Endereço de Entrega</p>
          </span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </TitleSectionFormAddress>
        <FormAddresSection />
      </SectionFormAddress>
      <PaymentContainer>
        <TitlePayment>
          <span>
            <CurrencyDollar />
            <p>Pagamento</p>
          </span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </TitlePayment>
        <PayamentMethodOptions />
      </PaymentContainer>
    </FillYourRequestContainer>
  )
}
