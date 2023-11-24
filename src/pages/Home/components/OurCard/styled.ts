import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const BurguerContent = styled.main`
  width: 100%;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 4rem;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 0 2rem;
  }

  @media (max-width: 800px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    align-items: center;
    width: 100vw;
    padding: 0;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`

export const BurguerList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  justify-items: center;

  @media (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
  }
`
