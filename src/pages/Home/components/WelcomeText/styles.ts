import styled from 'styled-components'

export const ContainerText = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 45%;
  grid-template-areas: 'text' 'image';
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  .textContainer {
    flex: 1;
    grid-area: text;
    display: flex;
    flex-direction: column;
    line-height: 1.6;
    gap: 1rem;
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      grid-area: image;
      width: 18rem;
      height: 18rem;
      object-fit: cover;
      padding: 0 auto;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    grid-template-columns: 1fr 30%;

    .imageContainer {
      width: 15rem;
      height: 15rem;
      justify-content: flex-start;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100vw;
    grid-template-columns: 100%;

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
    font-size: 1.2rem;
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
    gap: 2rem;
    padding: 1rem 0;
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
