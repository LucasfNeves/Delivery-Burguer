import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    html {
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme['base-background']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', san-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialised; // Melhora a qualidade da letra
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        -webkit-font-smoothing: antialised; // Melhora a qualidade da letra
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    ::-webkit-scrollbar{
    width: 7px;
   
    }

  
    ::-webkit-scrollbar-track{
        background: ${(props) => props.theme['base-background']};
    }
    
    ::-webkit-scrollbar-thumb{
        background: ${(props) => props.theme['base-card']};
        border-radius: 10px;
    }

`
