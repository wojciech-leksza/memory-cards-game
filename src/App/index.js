import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import Header from "./Header";
import Content from "./Content";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Content />
    </ThemeProvider>
  </Provider>
);

export default App;
