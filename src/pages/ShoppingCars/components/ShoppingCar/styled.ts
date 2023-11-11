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
export const ItensSelected = styled.figure`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 6px;

    @media (max-width: 768px) {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  figcaption {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 768px) {
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }

    span {
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-text']};
    }

    div {
      width: 10.6875rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      div {
        display: flex;
        flex-direction: row;
        width: 100%;
      }

      @media (max-width: 768px) {
        width: 100%;
        gap: 0.2rem;
      }

      h4 {
        font-size: 1.3rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 0.5rem;
      }
    }
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
export const ConfirmOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    gap: 0.5rem;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
    }
  }

  .totalValue {
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  button {
    margin-top: 1.5rem;
    border: none;
    background: none;
    background-color: ${(props) => props.theme.yellow};
    width: 100%;
    height: 2.375rem;
    text-transform: uppercase;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s;

    &:focus {
      outline: 0;
      box-shadow: 0 0 2px ${(props) => props.theme['purple-dark']};
    }

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
      cursor: pointer;
    }
  }
`
