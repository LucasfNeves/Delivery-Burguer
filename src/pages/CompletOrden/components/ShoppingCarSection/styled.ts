import styled from 'styled-components'

export const ShoppingCarContainer = styled.section`
  width: 100%;
  grid-area: shoppingCar;
  margin: 3.625rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
  box-shadow: 0px 0px 10px ${(props) => props.theme.shadown};

  @media (max-width: 1400px) {
    width: 90%;
    border-radius: 6px;
    margin: 0;
    margin-bottom: 3rem;
  }
`
export const ItensSelectedContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    border-bottom: solid 1px ${(props) => props.theme['base-button']};
    padding-bottom: 2rem;
  }
`
