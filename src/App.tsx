import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";

import { Home } from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
