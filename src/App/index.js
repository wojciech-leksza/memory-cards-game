import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import Header from "./Header";
import Content from "./Content";

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Header />
    <Content />
  </ThemeProvider>
);

export default App;
