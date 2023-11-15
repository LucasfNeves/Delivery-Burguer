import styled from 'styled-components'

export const ItensSelected = styled.li`
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
`

export const InfoIten = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  > span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    flex-direction: column;
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
    width: 100%;
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
export const PriceBurguer = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
`

export const NameBurguer = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
`
