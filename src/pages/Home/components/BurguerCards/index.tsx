import { ShoppingCartSimple } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  AddCartWrapper,
  CardFooter,
  ContainerCard,
  Description,
  Name,
  Price,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../context/CartContext'

export interface Burguers {
  id: number
  title: string
  description: string
  price: number
  Image: string
}

interface BurguersProps {
  burguer: Burguers
}

export function CardBurguer({ burguer }: BurguersProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  function handleAddToCart() {
    const burguerToAdd = {
      ...burguer,
      quantity,
    }

    addToCart(burguerToAdd)
  }

  function handleIncrise() {
    setQuantity((state) => state + 1)
  }

  function handleDecrise() {
    setQuantity((state) => state - 1)
  }

  const formatedPrice = formatMoney(burguer.price)
  return (
    <ContainerCard key={burguer.id}>
      <img src={burguer.Image} alt="Imagem do Big Burger" />
      <Name>{burguer.title}</Name>
      <Description>{burguer.description}</Description>

      <CardFooter>
        <Price>{formatedPrice}</Price>
        <AddCartWrapper>
          <QuantityInput
            quantity={quantity}
            onIncrise={handleIncrise}
            onDecrise={handleDecrise}
          />

          <button onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ContainerCard>
  )
}
