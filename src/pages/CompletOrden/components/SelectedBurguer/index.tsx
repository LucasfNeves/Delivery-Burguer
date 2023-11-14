import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { ButtonRemoveItem } from '../ShoppingCarSection/styled'
import { ItensSelected } from './styled'
import { CartContext, CartItem } from '../../../../context/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useContext } from 'react'

interface BurguerCartCardProps {
  burguer: CartItem
}

export function SelectedBurguer({ burguer }: BurguerCartCardProps) {
  const { changeQuantityCartCard, removeFromCart } = useContext(CartContext)

  const formatedPrice = formatMoney(burguer.price * burguer.quantity)

  function handleIncrise() {
    changeQuantityCartCard(burguer.id, 'increase')
  }

  function handleDecrise() {
    changeQuantityCartCard(burguer.id, 'decrease')
  }

  function handleRemove() {
    removeFromCart(burguer.id)
  }

  return (
    <ItensSelected>
      <img src={burguer.Image} alt="" />
      <figcaption>
        <section>
          <h4>{burguer.title}</h4>
          <span>{formatedPrice}</span>
        </section>
        <div>
          <QuantityInput
            onIncrise={handleIncrise}
            onDecrise={handleDecrise}
            quantity={burguer.quantity}
          />

          <ButtonRemoveItem onClick={handleRemove}>
            <Trash />
            <p>Remover</p>
          </ButtonRemoveItem>
        </div>
      </figcaption>
    </ItensSelected>
  )
}
