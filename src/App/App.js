import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import Theme from './Theme';

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />

  </ThemeProvider>
);

export default App;
