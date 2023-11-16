import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'informations figure';
  gap: 6rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'informations' 'figure';
    gap: 2rem;
    justify-items: center;
    align-items: center;
  }
`

export const Figure = styled.figure`
  grid-area: figure;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 100%;
    max-width: 34rem;
  }

  @media (max-width: 1400px) {
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      max-width: 70%;
      object-fit: cover;
      object-position: center;
    }
  }
`
export const Informations = styled.section`
  grid-area: informations;
  min-width: 36rem;
  max-width: 36rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  position: relative;
  background-color: white;

  @media (max-width: 1400px) {
    width: 90%;
    min-width: 90%;
    margin: 0;
    align-items: flex-start;
  }

  .iconMap {
    background-color: ${(props) => props.theme.purple};
  }

  .iconTimer {
    background-color: ${(props) => props.theme.yellow};
  }

  .iconDollar {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  article {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;

    figure {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.white};
    }

    div {
      display: flex;
      flex-direction: column;
      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 1.1rem;

        span {
          font-size: 1rem;
        }
      }

      span {
        color: ${(props) => props.theme['base-title']};
        font-weight: bold;
      }
    }

    @media (max-width: 1400px) {
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -3px;
    z-index: -1;
    border-radius: 6px 36px;
    width: calc(100% + 3px);
    height: calc(100% + 3px);
    z-index: -1;
    background-image: linear-gradient(to right, #dbac2c, #8047f8);
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 8px 38px;
  }
`

export const Legend = styled.legend`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  margin-top: 3.75rem;

  @media (max-width: 1400px) {
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      text-align: center;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  }

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
