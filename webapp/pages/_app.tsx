import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const themeConfig = {
  brand: {
    50: "#ffe2e7",
    100: "#ffb2b8",
    200: "#ff808b",
    300: "#fe4e5c",
    400: "#fd202e",
    500: "#e50a16",
    600: "#b20411",
    700: "#80000b",
    800: "#4e0006",
    900: "#1f0000",
  },
};

const theme = extendTheme({ themeConfig });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
