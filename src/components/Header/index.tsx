import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import logoPrimarySmall from './../../assets/logoPrimarySmall.svg'
import { Container, HeaderContainer, LocalitionHeader } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <Container>
      <HeaderContainer>
        <NavLink className="navlink" to="/">
          <img src={logoPrimarySmall} alt="image" />
        </NavLink>
        <nav>
          <LocalitionHeader title="Localização da Loja">
            <MapPin size={18} color="#8047F8" weight="fill" />
            <span> Guarulhos, SP</span>
          </LocalitionHeader>
          <NavLink to="/ShoppingCars" title="Carrinho de compras">
            <span>
              <ShoppingCartSimple size={18} weight="fill" />
              <p>{cartQuantity}</p>
            </span>
          </NavLink>
        </nav>
      </HeaderContainer>
    </Container>
  )
}
