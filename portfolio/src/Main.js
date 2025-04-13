import React from 'react';
import './index.css'
import Header from './components/Header/Header'
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';
import Skills from './components/Skills/Skills'

const Main = ()  =>{
  return (
    <div>
      <Header></Header>

      <WelcomeBlock></WelcomeBlock>

      <Skills></Skills>
    </div>
  );
}

export default Main;
