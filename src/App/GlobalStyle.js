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
    background-color: ${({ theme: { colors } }) => colors.background};
    };
`;

export default GlobalStyle;