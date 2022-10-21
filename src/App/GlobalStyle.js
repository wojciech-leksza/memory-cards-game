import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing:border-box;   
    };

    *, ::before, ::after {
    box-sizing: inherit;
    };

    body {
    font-family: 'Inter', sans-serif;
    background-color: #FFF;
    };
`;

export default GlobalStyle;