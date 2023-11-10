import { Plus, Minus, Trash } from 'phosphor-react'
import { ButtonAddProduct } from '../../../Home/components/CardsProduct/styles'
import image from './../../../Home/data/assets/download 2.png'
import {
  ShoppingCarContainer,
  ItensSelectedContainer,
  ItensSelected,
  ButtonRemoveItem,
  ConfirmOrderContainer,
} from './styled'

export function ShoppingCarSection() {
  return (
    <ShoppingCarContainer>
      <ItensSelectedContainer>
        <li>
          <ItensSelected>
            <img src={image} alt="" />
            <figcaption>
              <div>
                <h4>Big Burger 1</h4>
                <div>
                  <ButtonAddProduct>
                    <button>
                      <Plus weight="bold" />
                    </button>
                    <span>1</span>
                    <button>
                      <Minus weight="bold" />
                    </button>
                  </ButtonAddProduct>
                  <ButtonRemoveItem>
                    <Trash />
                    <p>Remover</p>
                  </ButtonRemoveItem>
                </div>
              </div>
              <span>R$ 9,90</span>
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
        <button>confirmar pedido</button>
      </ConfirmOrderContainer>
    </ShoppingCarContainer>
  )
}
