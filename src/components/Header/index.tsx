import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import logoPrimarySmall from './../../assets/logoPrimarySmall.svg'
import { HeaderContainer, LocalitionHeader } from './styles'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
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
            <p>0</p>
          </span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
