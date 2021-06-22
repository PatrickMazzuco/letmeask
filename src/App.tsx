import React from "react";
import { ThemeProvider } from "styled-components";

import "./services/firebase";

import { Router } from "./router";
import { AuthContextProvider } from "./contexts/AuthContext";

import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
