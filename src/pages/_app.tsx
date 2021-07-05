import Head from "next/head";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meta Smart</title>
      </Head>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
