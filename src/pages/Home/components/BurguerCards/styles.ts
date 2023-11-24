import styled from 'styled-components'

export const ContainerCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 18.75rem;
  min-height: 25rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 2px 8px 2px ${(props) => props.theme.shadown};

  img {
    height: 7rem;
    width: 7rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 738px) {
    width: 95%;
    margin-bottom: 1rem;
    border-radius: 6px;

    img {
      height: 6rem;
      width: 6rem;
    }
  }
`

export const Name = styled.h3`
  line-height: 2;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`

export const Description = styled.p`
  width: 100%;
  text-align: center;
  line-height: 1.4;
  color: ${(props) => props.theme['base-label']};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`
export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin: auto 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Price = styled.h3`
  gap: 0.3rem;
  font-size: 1.7rem;
  color: ${(props) => props.theme['base-subtitle']};

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 1.4rem;
  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme.purple};
      cursor: pointer;
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`
