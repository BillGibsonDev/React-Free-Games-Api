import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    width: 80%;
    margin: auto;
    scroll-behavior: smooth;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    background:#000000;
    @media (max-width: 1450px){
        font-size: 70%;
        width: 90%;
    }  
    @media (max-width: 750px){
       font-size: 50%;
  }
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyle;