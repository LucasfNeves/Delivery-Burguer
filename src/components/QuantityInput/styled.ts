import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  height: 2.375rem;
  padding: 0 0.5rem;

  span {
    text-align: center;
    width: 2.375rem;
    background: none;
    border: none;
    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 0 1rem;
  }
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.purple};
  transition: 0.4s;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 2.375rem;
    font-size: 1rem;
  }
`
