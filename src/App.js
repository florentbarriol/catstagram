import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './modules/home/home.component';
import Profile from './modules/profile/profile.component';
import About from './modules/about/about.component';
import Preview from './modules/preview/preview.component';
import { Header, HEADER_HEIGHT } from './components/header.component';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body, html {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3 {
    margin: 1.5em 0;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT}px;
  & > footer {
    margin-top: auto;
  }
`;

const MainWrapper = styled.main`
  background-color: #fafafa;
  flex-grow: 1;
`;
const InnerMainWrapper = styled.div`
  margin: 0 auto 30px;
  padding: 60px 20px 0;
  width: 100%;
  max-width: 935px;
`;

export default () => (
  <Router>
    <Wrapper>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <InnerMainWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/:username" component={Profile} />
            <Route path="/p/:imageId" component={Preview} />
          </Switch>
        </InnerMainWrapper>
      </MainWrapper>
    </Wrapper>
  </Router>
);
