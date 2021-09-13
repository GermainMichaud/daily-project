import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppContainer from '../../components/AppContainer';
import Header from '../../components/Header';
import logo from '../../assets/logo.svg';
import './App.css';
import Brand from '../../components/Brand';
import Content from '../../components/Content';
import HomePage from '../HomePage';
import ProjectPage from '../ProjectPage';

function App() {
  return (
    <AppContainer>
      <Router>
        <Header>
          <Brand>
            <img src={logo} height="30" alt="Logo" />
            Daily Project
          </Brand>
          <Link to="/">Projects</Link>
        </Header>
        <Content>
          <Route
            render={({ location }) => (
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={HomePage} />
                <Route path="/:projectName" component={ProjectPage} />
              </Switch>
            )}
          />
        </Content>
      </Router>
    </AppContainer>
  );
}

export default App;
