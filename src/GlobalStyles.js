import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    margin: auto;
    scroll-behavior: smooth;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    background: #1d1d1d;
    @media (max-width: 1450px){
        font-size: 70%;
        width: 90%;
    }  
    @media (max-width: 1050px){
        font-size: 60%;
        width: 90%;
    }
}
h1, h2, h3, h4, h5, h6, a , label, button, p {
    letter-spacing: 1px;
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyle;