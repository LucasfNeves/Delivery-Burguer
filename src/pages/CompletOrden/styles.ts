import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  padding: 2rem 0 5rem;
`

export const FormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 448px;
  grid-template-areas: 'form shoppingCar';
  gap: 5rem;

  @media (max-width: 1400px) {
    margin-top: 3rem;
    grid-template-columns: 1fr;
    grid-template-areas: 'form' 'shoppingCar';
    gap: 2rem;
    justify-items: center;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'form' 'shoppingCar';
    gap: 2rem;
    justify-items: center;
  }
`
