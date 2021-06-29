import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles1/global';
import theme from '../styles1/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
