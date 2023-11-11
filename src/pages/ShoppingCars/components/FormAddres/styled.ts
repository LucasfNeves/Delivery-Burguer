import styled from 'styled-components'

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
  max-height: 23.25rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

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

export const BaseInput = styled.input`
  height: 2.625rem;
  border: none;
  border: 1px solid ${(porps) => porps.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding-left: 1rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 1rem;
  }
`

export const InputWidth200 = styled(BaseInput)`
  justify-content: flex-start;
  width: 12.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const InputRuaAndCep = styled(BaseInput)`
  width: 35rem;

  @media (max-width: 1400px) {
    width: 100%;
  }
`

export const InputComplement = styled(BaseInput)`
  width: 21.75rem;

  @media (max-width: 1400px) {
    width: 100%;
  }
`
export const InputCity = styled(BaseInput)`
  width: 17.25rem;

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InputSelect = styled.select`
  width: 3.75rem;
  height: 2.625rem;
  border: none;
  border: 1px solid ${(porps) => porps.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding-left: 1rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 1rem;
  }

  cursor: pointer;

  @media (max-width: 1400px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ContainerInput = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 1400px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 448pxpx) {
    width: 100%;
  }
`
