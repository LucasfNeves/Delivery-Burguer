import { useContext } from 'react'
import { ConfirmOrderContainer, TotalValue, ButtomConfirmOrder } from './styled'
import { CartContext } from '../../../../../../context/CartContext'
import { formatMoney } from '../../../../../../utils/formatMoney'

const DELIVERY_PRICE = 3.5
export function ConfirmOnderSection() {
  const { cartItemsTotal, cartQuantity } = useContext(CartContext)

  const fomatedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const totalPrice = DELIVERY_PRICE + cartItemsTotal
  const formatedPriceTotal = formatMoney(totalPrice)
  const formatedCartItemsTotal = formatMoney(cartItemsTotal)
  return (
    <ConfirmOrderContainer>
      <span>
        <p>Total de itens</p>
        <p>{formatedCartItemsTotal}</p>
      </span>
      <span>
        <p>Entrega</p>
        <p>{fomatedDeliveryPrice}</p>
      </span>
      <TotalValue>
        <p>Total</p>
        <p>{formatedPriceTotal}</p>
      </TotalValue>
      <ButtomConfirmOrder type="submit" disabled={cartQuantity <= 0}>
        confirmar pedido
      </ButtomConfirmOrder>
    </ConfirmOrderContainer>
  )
}
