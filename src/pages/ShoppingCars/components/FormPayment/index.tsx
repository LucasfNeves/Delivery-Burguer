import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import {
  PaymentContainer,
  TitlePayment,
  ContainerButton,
  ButtonStyle,
} from './styled'

export function SectionPayment() {
  return (
    <PaymentContainer>
      <TitlePayment>
        <span>
          <CurrencyDollar />
          <p>Pagamento</p>
        </span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </TitlePayment>
      <ContainerButton>
        <ButtonStyle value="credit">
          <CreditCard />
          <p>Cartão de crédito</p>
        </ButtonStyle>
        <ButtonStyle value="debit">
          <Bank />
          <p>Cartão de débito</p>
        </ButtonStyle>
        <ButtonStyle value="money">
          <Money />
          <p>Dinheiro</p>
        </ButtonStyle>
      </ContainerButton>
    </PaymentContainer>
  )
}
