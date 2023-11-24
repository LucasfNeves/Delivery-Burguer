import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  padding: 1rem 0 1rem;
  background-color: ${({ theme }) => theme['base-background']};
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 990px) {
    padding: 0.5rem 0 0.5rem;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme['base-background']};

  .navlink {
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  img {
    height: 3.75rem;
    width: 3.75rem;
    cursor: pointer;

    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0 2rem;
    width: 100%;

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  nav {
    display: flex;
    gap: 0.7rem;

    a {
      position: relative;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      color: ${({ theme }) => theme['yellow-dark']};
      transition:
        color 0.2s,
        background-color 0.2s;

      p:nth-child(2) {
        position: absolute;
        top: calc(0rem - 0.5rem);
        right: calc(0rem - 0.5rem);
        background-color: ${({ theme }) => theme['yellow-dark']};
        color: ${({ theme }) => theme.white};
        font-size: 0.7rem;
        font-weight: 700;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        background-color: ${({ theme }) => theme.yellow};
        color: ${(props) => props.theme.white};
      }

      &.active {
        background-color: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};
      }
    }
  }
`
export const LocalitionHeader = styled.span`
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme['purple-dark']};

  @media (max-width: 480px) {
    display: none;
  }
`
