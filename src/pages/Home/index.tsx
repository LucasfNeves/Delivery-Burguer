import { WelcomeText } from './components/WelcomeText'
import { OurBurguer } from './components/OurCard'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <WelcomeText />
      <OurBurguer />
    </HomeContainer>
  )
}
