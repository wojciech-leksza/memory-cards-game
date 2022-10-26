import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectTheme } from "./slice";
import GlobalStyle from "./GlobalStyle";
import Theme from "./Theme";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  const themeName = useSelector(selectTheme);

  return (
    <ThemeProvider theme={Theme(themeName)}>
      <GlobalStyle />
      <Header />
      <Content />
    </ThemeProvider>
  );
};

export default App;
