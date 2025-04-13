import React from 'react';
import './WelcomeBlock.css'

const WelcomeBlock = () => {
  return (
    <div className='welcome-block'>
      <div className='first-block'>
        <h1>Web-developer <span className='title'>Rostik</span></h1>
        
        <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
          Creating <span style={{ color: "#4824ff" }}>marketable </span><br/>
          and <span style={{ color: "#4824ff" }}>unique </span>
          websites<br/>based on your requests
        </h2>

        <h3>
          Doing web-developing<br/>
          during <span style={{ color: "#4824ff" }}>1 year</span>
        </h3>
      </div>

      <div className='second-block'>
        <img className='first-img-layer' src={'/images/1.png'} width={'500px'} height={'500px'} draggable='false'/>
      </div>
    </div>
  )
}

export default WelcomeBlock;