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

export const ButtonRemoveItem = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.6875rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  gap: 0.2rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  transition: background-color 0.2s;

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-text']};

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 2px ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
