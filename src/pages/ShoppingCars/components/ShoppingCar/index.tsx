import { Trash } from 'phosphor-react'
import {
  ShoppingCarContainer,
  ItensSelectedContainer,
  ItensSelected,
  ButtonRemoveItem,
  ConfirmOrderContainer,
} from './styled'
import { NavLink } from 'react-router-dom'
import { QuantityInput } from '../../../../components/QuantityInput'

export function ShoppingCarSection() {
  return (
    <ShoppingCarContainer>
      <ItensSelectedContainer>
        <li>
          <ItensSelected>
            <img src={''} alt="" />
            <figcaption>
              <section>
                <h4>Big Burger 1</h4>
                <span>R$ 9,90</span>
              </section>
              <div>
                <QuantityInput
                  onIncrise={() => {}}
                  onDecrise={() => {}}
                  quantity={1}
                />

                <ButtonRemoveItem>
                  <Trash />
                  <p>Remover</p>
                </ButtonRemoveItem>
              </div>
            </figcaption>
          </ItensSelected>
        </li>
      </ItensSelectedContainer>
      <ConfirmOrderContainer>
        <span>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </span>
        <span>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </span>
        <span className="totalValue">
          <p>Total</p>
          <p>R$ 33,20</p>
        </span>
        <NavLink
          className="Navlink"
          to="/CheckoutScreen"
          title="confirmar pedido"
        >
          <button>confirmar pedido</button>
        </NavLink>
      </ConfirmOrderContainer>
    </ShoppingCarContainer>
  )
}
