import styled from 'styled-components'
import intro from '../../../../assets/Intro.png'

export const Container = styled.div`
  width: 100vw;
  padding: 2rem 0 5rem;
  background-image: url(${intro});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const ContainerText = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .textContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1.6;
    gap: 1rem;
  }

  .imageContainer {
    display: flex;
    align-items: center;

    img {
      width: 100%;
      object-fit: cover;
      padding: 0 auto;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 0 2rem;

    .imageContainer {
      justify-content: flex-start;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100vw;

    .textContainer {
      width: 100%;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
    }

    .imageContainer {
      display: none;
    }
  }
`
export const Title = styled.h1`
  white-space: nowrap;
  font-size: 2.5rem;
  line-height: 1.3;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};

  span {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
    text-align: center;
  }
`

export const Legend = styled.div`
  font-size: 1rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.6;

  @media (max-width: 768px) {
    display: none;
  }
`

export const SubLegend = styled.div`
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    margin-top: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.white};
      padding: 0.5rem;
      border-radius: 50%;
    }
  }

  p:first-child span {
    background-color: ${(props) => props.theme.yellow};
  }

  p:last-child span {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 3rem;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;

    p {
      white-space: normal;
      text-align: left;
    }
  }

  @media (max-width: 537px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    p {
      white-space: normal;
      text-align: left;
      font-size: 87.25%;
    }
  }
`
