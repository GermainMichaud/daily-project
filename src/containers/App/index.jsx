import React from 'react';
import AppContainer from '../../components/AppContainer';
import Header from '../../components/Header';
import logo from '../../assets/logo.svg';
import './App.css';
import Brand from '../../components/Brand';
import Content from '../../components/Content';

function App() {
  return (
    <AppContainer>
      <Header>
        <Brand>
          <img src={logo} height="30" alt="Logo" />
          Daily Project
        </Brand>
      </Header>
      <Content />
    </AppContainer>
  );
}

export default App;
