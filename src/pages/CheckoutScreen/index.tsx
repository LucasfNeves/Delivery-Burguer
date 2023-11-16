import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import ImageCheckoutScreen from './../../assets/ImageCheckoutScreen.svg'
import { Container, Figure, Informations, Legend } from './styled'
import { useLocation } from 'react-router-dom'
import { paymentMethods } from '../CompletOrden/components/CompleteOrderForm/components/PaymentMethodo'
export function CheckoutScreen() {
  const { state } = useLocation()
  return (
    <>
      <Legend>
        <h1>Uhu! Pedido confirmado</h1>
        <p>
          Agora é necessário aguardar que logo o hambúrguer chegará até você
        </p>
      </Legend>
      <Container>
        <Informations>
          <article>
            <figure className="iconMap">
              <MapPin weight="fill" />
            </figure>
            <div>
              <p>
                Entrega em &nbsp;
                <span>
                  {state.street}, {state.number}
                </span>
              </p>
              <span>
                {state.district} - {state.city}, {state.uf}
              </span>
            </div>
          </article>
          <article>
            <figure className="iconTimer">
              <Timer weight="fill" />
            </figure>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </article>
          <article>
            <figure className="iconDollar">
              <CurrencyDollar weight="fill" />
            </figure>
            <div>
              <p>Pagamento na entrega</p>
              <span>
                {
                  paymentMethods[
                    state.paymentMethod as keyof typeof paymentMethods
                  ].label
                }
              </span>
            </div>
          </article>
        </Informations>
        <Figure>
          <img src={ImageCheckoutScreen} alt="" />
        </Figure>
      </Container>
    </>
  )
}
