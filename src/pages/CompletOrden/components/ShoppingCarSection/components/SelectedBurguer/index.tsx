import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../../../components/QuantityInput'
import {
  ButtonRemoveItem,
  ContainerButtons,
  InfoIten,
  ItensSelected,
  PriceBurguer,
  NameBurguer,
} from './styled'
import { CartContext, CartItem } from './../../../../../../context/CartContext'
import { formatMoney } from '../../../../../../utils/formatMoney'
import { FormEvent, useContext } from 'react'
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

  function handleRemove(event: FormEvent) {
    event.preventDefault()
    removeFromCart(burguer.id)
  }

  return (
    <ItensSelected>
      <figure>
        <img src={burguer.Image} alt="" />
      </figure>
      <InfoIten>
        <span>
          <NameBurguer>{burguer.title}</NameBurguer>
          <PriceBurguer>{formatedPrice}</PriceBurguer>
        </span>
        <ContainerButtons>
          <QuantityInput
            onIncrise={handleIncrise}
            onDecrise={handleDecrise}
            quantity={burguer.quantity}
          />

          <ButtonRemoveItem onClick={handleRemove}>
            <Trash />
            <p>Remover</p>
          </ButtonRemoveItem>
        </ContainerButtons>
      </InfoIten>
    </ItensSelected>
  )
}
