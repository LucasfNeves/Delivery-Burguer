import styled from 'styled-components'

export const TitlePayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-label']};
    margin-left: 1.9rem;
  }
  span {
    color: ${(props) => props.theme.purple};
    font-size: 1.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      margin: 0;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  @media (max-width: 1400px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`

export const PaymentContainer = styled.section`
  min-width: 40rem;
  max-width: 40rem;
  min-height: 12.9375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0px 0px 10px ${(props) => props.theme.shadown};

  .error {
    color: ${(props) => props.theme['base-error']};
    font-size: 0.8rem;
  }

  @media (max-width: 1400px) {
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    border-radius: 6px;
    margin: 0;
    align-items: center;
    padding: 0 auto;
  }

  @media (max-width: 768px) {
    max-height: fit-content;
  }
`

export const FillYourRequestContainer = styled.section`
  width: 100%;
  margin: 3.625rem 0;
  grid-area: form;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  @media (max-width: 1400px) {
    width: 90%;
    border-radius: 6px;
    margin: 0;
    align-items: center;
  }

  @media (max-width: 992px) {
    width: 90%;
    border-radius: 6px;
    margin: 0;
  }
`

export const SectionFormAddress = styled.div`
  min-width: 40rem;
  max-width: 40rem;
  min-height: 23.25rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.shadown};

  @media (max-width: 1400px) {
    min-width: 100%;
    max-width: 100%;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0 auto;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    max-height: fit-content;
    width: 100%;
    margin: 0;
  }
`

export const TitleSectionFormAddress = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1rem;
  span {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.6;

    color: ${(props) => props.theme['yellow-dark']};
    font-size: 1.375rem;

    p {
      margin: 0;
      font-size: 1rem;
      color: ${(porps) => porps.theme['base-text']};
    }
  }

  p {
    font-size: 0.8rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-label']};
    margin-left: 1.9rem;
  }

  @media (max-width: 1400px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`
