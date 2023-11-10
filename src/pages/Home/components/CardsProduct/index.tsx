import { ButtonAddProduct, ContainerCard, SectionAddItem } from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

interface cardsOptions {
  products: {
    id: number
    Image: string
    title: string
    description: string
    price: number
  }
}

export function CardsProduct({ products }: cardsOptions) {
  return (
    <ContainerCard>
      <img src={products.Image} alt="Imagem do Big Burger" />
      <h3>{products.title}</h3>
      <p>{products.description}</p>
      <SectionAddItem>
        <span className="price">
          <p>R$</p>
          <h4>{products.price}</h4>
        </span>
        <ButtonAddProduct>
          <button>
            <Plus weight="bold" />
          </button>
          <span>1</span>
          <button>
            <Minus weight="bold" />
          </button>
        </ButtonAddProduct>
        <button className="ShopingCart">
          <ShoppingCartSimple weight="fill" />
        </button>
      </SectionAddItem>
    </ContainerCard>
  )
}
