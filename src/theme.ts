import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    blue: {
      50: "#e0f4ff",
      100: " #b8dcfa",
      200: " #8ec4f1",
      300: " #63ace8",
      400: " #3994e0",
      500: " #1f7bc6",
      600: " #135f9b",
      700: " #084470",
      800: " #002946",
      900: " #000f1d",
    },
  },
});

export default theme;
