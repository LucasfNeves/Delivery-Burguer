import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import ImageCheckoutScreen from './../../assets/ImageCheckoutScreen.svg'
import { Container, Figure, Informations, Legend } from './styled'
export function CheckoutScreen() {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <span>Cartão de Crédito</span>
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
