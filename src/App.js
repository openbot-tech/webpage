import React, { Component } from 'react';
import Openbotpic from './images/Openbot.svg';
import twitterpic from './images/twitter.svg';
import discordpic from './images/discord.svg';
import githubpic from './images/github.svg';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="jumbotron" id="header">
        <div className="container text-center">
          <img src={Openbotpic} id="banner" alt="OpenbotBanner"/>   
        </div>
      </div>
      <p id="text">Join us discussing & developing free, open-source trading algorithms</p>
      <br />
      <br />

      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <p><b>Code</b></p>
            <a className="App-link" href="https://github.com/openbot-tech"
            > 
            <img src={githubpic} id="logos" alt="github"/> 
            </a>
          </Col>

          <Col xs={6} md={6}>
            <p><b>Chat</b></p>
            <a className="App-link" href="https://discord.gg/6d4v6YC"
            > 
            <img src={discordpic} id="logos" alt="discord"/>  
            </a> 
          </Col>

          <Col xs={6} md={6}>
            <p><b>Follow</b></p>
            <a className="App-link" href="https://twitter.com/openbot_tech"
            > 
            <img src={twitterpic} id="logos" alt="twitter"/>  
            </a>   
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default App;
