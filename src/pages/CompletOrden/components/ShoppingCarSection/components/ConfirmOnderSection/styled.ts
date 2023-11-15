import styled from 'styled-components'

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
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    display: flex;
    justify-content: space-between;
  }
`

export const ButtomConfirmOrder = styled.button`
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
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TotalValue = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
  }
`
