import styled from 'styled-components'

export const PaymentContainer = styled.section`
  min-width: 40rem;
  max-width: 40rem;
  min-height: 12.9375rem;
  max-height: 12.9375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1400px) {
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    border-radius: 6px;
    margin: 0;
    align-items: center;
    padding: 0 auto;
  }

  @media (max-width: 768px) {
    max-height: fit-content;
  }
`

export const TitlePayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-label']};
    margin-left: 1.9rem;
  }
  span {
    color: ${(props) => props.theme.purple};
    font-size: 1.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      margin: 0;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  @media (max-width: 1400px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`
export const ContainerButton = styled.span`
  display: flex;
  gap: 1.33rem;

  @media (max-width: 1400px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`
export const ButtonStyle = styled.button`
  border: 0;
  background: none;
  background-color: ${(props) => props.theme['base-button']};
  width: 11.125rem;
  height: 3.1875rem;
  text-transform: uppercase;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.purple};
  transition: background-color 0.2s;

  p {
    font-size: 12px;
    color: ${(props) => props.theme['base-text']};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 2px ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    font-size: 1rem;

    p {
      font-size: 0.8rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
