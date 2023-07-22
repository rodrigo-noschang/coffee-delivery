import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";

import { Router } from './pages/index.routes';
import { CartContextProvider } from './contexts/Cart';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
