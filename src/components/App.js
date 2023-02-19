import React, { useState, useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeContext, ThemeProvider } from "../context/theme";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <main className={theme}>
      <UserProvider>
        <ThemeProvider>
          <Header />
          <Profile />
        </ThemeProvider>
      </UserProvider>
    </main>
  );
}

export default App;
