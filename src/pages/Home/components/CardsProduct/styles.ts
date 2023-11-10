import styled from 'styled-components'

export const ContainerCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 18.75rem;
  min-height: 25rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 2px 8px 2px ${(props) => props.theme.shadown};

  img {
    height: 7rem;
    width: 7rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    line-height: 2;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    width: 100%;
    text-align: center;
    line-height: 1.4;
    color: ${(props) => props.theme['base-label']};
  }

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 1rem;
    border-radius: 6px;

    img {
      height: 6rem;
      width: 6rem;
    }

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`
export const SectionAddItem = styled.footer`
  position: absolute;
  bottom: 2.5rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 0;

  .price {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    h4 {
      font-size: 1.7rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: bold;
    }
  }

  .ShopingCart {
    border: none;
    background: none;
    font-size: 1.1rem;

    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.purple};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    bottom: 1.5rem;
    padding: 0.5rem 0;

    .price {
      h4 {
        font-size: 1.4rem;
      }
    }

    .ShopingCart {
      font-size: 1rem;
      padding: 0 1rem;
      width: 80%;
      height: 2.375rem;
      font-size: 1rem;
    }
  }
`

export const ButtonAddProduct = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  font-size: 1.1rem;

  button {
    border: none;
    background: none;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 2.375rem;
    font-size: 1rem;
    padding: 0 1rem;
  }
`
