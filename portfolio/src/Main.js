import React from 'react';
import './index.css'
import Header from './components/Header/Header'
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';
import Services from './components/Services'

const Main = ()  =>{
  return (
    <div>
      <Header></Header>

      <WelcomeBlock></WelcomeBlock>

      <Services></Services>
    </div>
  );
}

export default Main;
