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
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';

class App extends Component {

  scrollToTop = () => {
      scroll.scrollToTop();
    };

  render() {
    return (
    <div className="App">
      <div id="navbar">
        <img src={Openbotpic} id="banner-img" alt="Openbot logo" onClick={this.scrollToTop}/>
        <ul class="nav-links">
          <li class="nav-item">
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Features</Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              to="strategies"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Strategies</Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              to="strategies"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Governance</Link>
          </li>
          <li class="nav-item">
            <a class="nav-item-black" href="https://openbot.gitbook.io/project/">Install</a>
          </li>
        </ul>
      </div>

      <div className="Header Section">
        <div className="Header-lead">
          <h1>Crowd-sourced <br /> crypto trading bots</h1>
          <h3 className="Header-text">Submit strategies or implement new features, <br /> the first openbot virtual hackathon is live</h3>
          <a className="Button-simple" href="https://github.com/openbot-tech/core/issues?utf8=%E2%9C%93&q=label%3A%22help+wanted%22">Gitcoin Bounties</a>
        </div>
        <div className="App-list">
          <a className="App-link" href="https://discord.gg/6d4v6YC">
            <img src={tradingscreen} id="tradingscreen" alt="tradingbot in action"/>
          </a>
        </div>
      </div>

      <fieldset>
      <legend id='features'>FEATURES</legend>
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
          <a className="App-link" href="https://github.com/openbot-tech">
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
      <legend id='strategies'>STRATEGIES</legend>
        <div className="Contribute Section">
          <div className="Contribute-box">
            <h2>Traders</h2>
            <a className="Contribute-img" href="https://github.com/openbot-tech/core/blob/master/src/core/strategy/strategies/TEMPLATE/index.js">
              <img src={traderspic} id="pics" alt="github"/>
            </a>
            <br />
            <a className="Button-simple" href="https://github.com/openbot-tech/core/blob/master/src/core/strategy/strategies/TEMPLATE/index.js">Submit Strategy</a>
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
      <legend id='governance'>GOVERNANCE</legend>
        <div className="Vision Section">
          <div>
            <h1>Towards a decentralized tradingbot community</h1>
            <p id="text">Join us discussing & developing free, open-source trading algorithms.</p>
            <a className="Button-simple" href="https://docs.google.com/document/d/1Lwe9McxjwQhRvfU2domiRhuSC0pCJ3uLLh-xkARFePM/edit?usp=sharing">Vision Paper</a>
          </div>
        </div>
      </fieldset>

      <div id="footer">
        <ul class="nav-links">
        <li class="nav-item"><a href="https://twitter.com/openbot_tech">Follow us</a></li>
        <li class="nav-item"><a href="https://medium.com/@openbot">Read our blog</a></li>
        </ul>
      </div>

    </div>
    );
  }
}

export default App;
