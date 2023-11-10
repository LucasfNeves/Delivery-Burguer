import { CardsProduct } from './components/CardsProduct'
import { WelcomeText } from './components/WelcomeText'
import { Container, ContainerCards } from './styles'
import { CardsProducts } from './data/dataCars'

export function Home() {
  return (
    <>
      <WelcomeText />
      <Container>
        <h2>Nossos Hamburguers</h2>
        <ContainerCards>
          {CardsProducts.map((product) => (
            <CardsProduct key={product.id} products={product} />
          ))}
        </ContainerCards>
      </Container>
    </>
  )
}
