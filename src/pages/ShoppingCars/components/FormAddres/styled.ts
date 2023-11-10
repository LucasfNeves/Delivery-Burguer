import styled from 'styled-components'

export const FillYourRequestContainer = styled.section`
  width: 100%;
  margin: 3.625rem 0;
  grid-area: form;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
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
  width: 12.5rem;
`
export const InputRua = styled(BaseInput)`
  width: 35rem;
`

export const InputComplement = styled(BaseInput)`
  width: 21.75rem;
`
export const InputCity = styled(BaseInput)`
  width: 17.25rem;
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
`
export const ContainerInput = styled.div`
  display: flex;
  gap: 12px;
`
