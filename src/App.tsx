import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { AddReview } from "./AddReview";
import { BookDetail } from "./components/BookDetail";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LightDarkCtl } from "./LightDarkCtl";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Notfound } from "./pages/Notfound";
import { Signup } from "./pages/Signup";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, whiteTheme } from "./styles/theme";

const SAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const SMain = styled.main`
  padding: 0 ${(props) => props.theme.marginlr};
`;

function App() {
  const [login, setLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const switchTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : whiteTheme}>
      <GlobalStyle />

      <SAppContainer>
        <Router>
          <div>
            <button type='button'>
              <Link to='/'>홈</Link>
            </button>
            <button
              type='button'
              onClick={switchTheme}
              style={{
                backgroundColor: darkMode ? "#fff" : "navy",
                color: darkMode ? "navy" : "#fff",
              }}
            >
              <LightDarkCtl darkMode={darkMode} />
            </button>
          </div>

          <Header />

          <SMain>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/cart' component={Cart} />
              <Route path='/books' component={BookDetail} />
              <Route
                path='/book/:id/reader-review/new'
                exact
                component={AddReview}
              />
              <Route path='/' exact component={Home} />
              <Route component={Notfound} />
            </Switch>
          </SMain>

          <Footer />
        </Router>
      </SAppContainer>
    </ThemeProvider>
  );
}

export default App;
