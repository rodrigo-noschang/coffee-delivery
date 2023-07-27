import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";

import { Router } from './pages/index.routes';

import { ContextsProviders } from './contexts';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ContextsProviders>
          <Router />
        </ContextsProviders>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
