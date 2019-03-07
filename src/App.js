import React, { Component } from 'react';
import Openbotpic from './images/svg/Openbot_black.svg';
import twitterpic from './images/svg/twitter.svg';
import discordpic from './images/svg/discord.svg';
import githubpic from './images/svg/github.svg';
import stackpic from './images/svg/stack.svg';
import testpic from './images/svg/test.svg';
import traderspic from './images/png/traders.png';
import devspic from './images/png/developers.png';
import tradingscreen from './images/png/tradingscreen.png';
import { ButtonToolbar, Button } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div id="navbar">
        <img src={Openbotpic} id="banner-img" alt="Openbot logo"/>
        <ul class="nav-links">
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Features</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Strategies</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Governance</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Documentation</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Install</a></li>
        </ul>
      </div>

      <div className="Header Section">
        <div className="Header-lead">
          <h1>Crowd-sourced <br /> crypto trading bots</h1>
          <h3 className="Header-text">Submit strategies or implement new features, <br /> the first openbot virtual hackathon is live</h3>
          <a className="Button-simple" href="https://openbot.gitbook.io/project/">Gitcoin Bounties</a>
        </div>
        <div className="App-list">
          <a className="App-link" href="https://discord.gg/6d4v6YC">
            <img src={tradingscreen} id="tradingscreen" alt="tradingbot in action"/>
          </a>
        </div>
      </div>

      <fieldset>
      <legend>FEATURES</legend>
      <div className="Features Section">
        <div className="App-list">
          <a className="App-link" href="https://github.com/openbot-tech">
            <img src={githubpic} id="logos" alt="github"/>
          </a>
          <div className="App-text">
            <h3>Open-Source</h3>
            <p className="description-text">All code is open source, <br /> freely available on Github</p>
          </div>
        </div>
        <div className="App-list">
          <a className="App-link" href="https://discord.gg/6d4v6YC">
            <img src={discordpic} id="logos" alt="discord"/>
          </a>
          <div className="App-text">
            <h3>Crowd-sourced</h3>
            <p className="description-text">Openbot is developer by a distributed <br /> and passionate trading community</p>
          </div>
        </div>
        <div className="App-list">
          <a className="App-link" href="https://twitter.com/openbot_tech">
          <img src={stackpic} id="logos" alt="twitter"/>
          </a>
          <div className="App-text">
            <h3>Work in progress</h3>
            <p className="description-text">Trendfollowing is just the beginning, <br /> feel free to add your own component</p>
          </div>
        </div>
        <div className="App-list">
          <a className="App-link" href="https://twitter.com/openbot_tech">
          <img src={testpic} id="logos" alt="twitter"/>
          </a>
          <div className="App-text">
            <h3>Full test coverage</h3>
            <p className="description-text">Openbot has enterprise-grade unit, <br /> integration and end-to-end tests</p>
          </div>
        </div>
      </div>
      </fieldset>

      <fieldset>
      <legend>CONTRIBUTE</legend>
        <div className="Contribute Section">
          <div className="Contribute-box">
            <h2>Traders</h2>
            <a className="Contribute-img" href="https://discord.gg/6d4v6YC">
              <img src={traderspic} id="pics" alt="github"/>
            </a>
            <br />
            <a className="Button-simple" href="https://discord.gg/6d4v6YC">Submit Strategy</a>
          </div>
          <div className="Contribute-box">
            <h2>Developers</h2>
            <a className="Contribute-img" href="https://github.com/openbot-tech">
              <img src={devspic} id="pics" alt="discord"/>
            </a>
            <br />
            <a className="Button-simple" href="https://github.com/openbot-tech">View Codebase</a>
          </div>
        </div>
      </fieldset>

      <fieldset>
      <legend>VISION</legend>
        <div className="Vision Section">
          <div>
            <h1>Towards a decentralized tradingbot community</h1>
            <p id="text">Join us discussing & developing free, open-source trading algorithms.</p>
            <a className="Button-simple" href="https://openbot.gitbook.io/project/">Vision Paper</a>
          </div>
        </div>
      </fieldset>

      <div id="footer">
        <ul class="nav-links">
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Features</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Strategies</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Governance</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Documentation</a></li>
          <li class="nav-item"><a href="https://openbot.gitbook.io/project/">Install</a></li>
        </ul>
      </div>

    </div>
    );
  }
}

export default App;
