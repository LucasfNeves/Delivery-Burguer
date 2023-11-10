import { ContainerText, Legend, SubLegend, Title } from './styles'
import logoPrimaryBig from './../../../../assets/logoPrimaryBig.svg'
import { ShoppingCartSimple, Timer } from 'phosphor-react'

export function WelcomeText() {
  return (
    <ContainerText>
      <div className="textContainer">
        <Title>
          <p>Encontre o Hambúrguer</p>
          <p>perfeito para você !</p>
        </Title>
        <Legend>
          <p>
            Com o Burguer Delivery você recebe seu hambúrguer onde estiver, a
            qualquer hora !
          </p>
        </Legend>
        <SubLegend>
          <p>
            <span>
              <ShoppingCartSimple weight="fill" />
            </span>
            Compra simples e segura
          </p>
          <p>
            <span>
              <Timer weight="fill" />
            </span>
            Entrega rápida e rastreada
          </p>
        </SubLegend>
      </div>
      <div className="imageContainer">
        <img src={logoPrimaryBig} alt="" />
      </div>
    </ContainerText>
  )
}
