import styled from 'styled-components'

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
