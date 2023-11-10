import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 80%;
  min-width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 992px) {
    padding: 0 2rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`
