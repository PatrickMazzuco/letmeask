import React from "react";
import { ThemeProvider } from "styled-components";

import "./services/firebase";

import { Router } from "./router";
import { AuthContextProvider } from "./contexts/AuthContext";

import { GlobalStyles } from "./styles/global";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { selectedTheme } = useTheme();
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
