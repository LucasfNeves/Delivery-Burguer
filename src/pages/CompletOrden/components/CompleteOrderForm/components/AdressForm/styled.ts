import styled from 'styled-components'

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

export const InputSelect = styled.input`
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
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  > p {
    color: ${(props) => props.theme['base-error']};
    font-size: 0.8rem;
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

  @media (max-width: 448px) {
    width: 100%;
  }
`
