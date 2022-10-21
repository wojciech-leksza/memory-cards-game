import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import Header from "./Header";

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);

export default App;
