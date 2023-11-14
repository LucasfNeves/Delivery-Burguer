import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
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
