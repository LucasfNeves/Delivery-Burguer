import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  FillYourRequestContainer,
  SectionFormAddress,
  TitleSectionFormAddress,
  PaymentContainer,
  TitlePayment,
} from './styled'
import { PayamentMethodOptions } from './components/PaymentMethodo'
import { FormAddresSection } from './components/AdressForm'
import { useFormContext } from 'react-hook-form'
import { ConfirmOrderFormData } from '../../../../schemas/FormAdrressSchema'

export function CompleteOrderForm() {
  const {
    formState: { errors },
  } = useFormContext<ConfirmOrderFormData>()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string
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
        {paymentMethodError && <p className="error">{paymentMethodError}</p>}
      </PaymentContainer>
    </FillYourRequestContainer>
  )
}
