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

  figcaption {
    width: 100%;
    display: flex;
    flex-direction: column;
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

    section {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 1rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-text']};
      }

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4 {
          font-size: 1.3rem;
          color: ${(props) => props.theme['base-subtitle']};
        }
      }
    }

    div {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      @media (max-width: 768px) {
        width: 100%;
        gap: 0.2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
