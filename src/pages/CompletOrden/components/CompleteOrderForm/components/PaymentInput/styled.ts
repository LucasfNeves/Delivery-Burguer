import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};

    &:hover {
      background: ${(props) => props.theme['brand-purple-light']};
    }
  }
`

export const ContentContainer = styled.div`
  width: 11.125rem;
  height: 3.1875rem;
  padding: 0 1rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  user-select: none;
`
