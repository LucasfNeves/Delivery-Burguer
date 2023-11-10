import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 4rem;
    font-size: 2rem;
  }

  @media (max-width: 992px) {
    margin-top: 3rem;
    width: 100vw;

    h2 {
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    align-items: center;
    width: 100vw;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`

export const ContainerCards = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;

  @media (max-width: 992px) {
    justify-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
