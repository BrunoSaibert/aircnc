import React from "react";

import GlobalStyle from "./styles/global";

import Routes from "./routes";

import Container from "./components/Container";
import Content from "./components/Content";

import logo from "./assets/logo.svg";

function App() {
  return (
    <Container>
      <img src={logo} alt="AirCnC" />

      <Content>
        <Routes />
      </Content>

      <GlobalStyle />
    </Container>
  );
}

export default App;
