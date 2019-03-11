import React, { Component } from 'react';
import Openbotpic from './images/svg/Openbot_black.svg';
import discordpic from './images/svg/discord.svg';
import githubpic from './images/svg/github.svg';
import stackpic from './images/svg/stack.svg';
import testpic from './images/svg/test.svg';
import twittericon from './images/svg/twitter-tile.svg';
import mediumicon from './images/svg/medium-tile.svg';
import discordicon from './images/svg/discordapp-tile.svg';
import traderspic from './images/png/traders.png';
import devspic from './images/png/developers.png';
import { Button } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import MediaQuery from 'react-responsive';
import './App.css';

class App extends Component {

  scrollToTop = () => {
      scroll.scrollToTop();
    };

  render() {
    return (
    <div className="App">

      <MediaQuery minDeviceWidth={941}>
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
      </MediaQuery>
      <MediaQuery maxWidth={940}>
        <div id="navbar">
          <img src={Openbotpic} id="banner-img" alt="Openbot logo" onClick={this.scrollToTop}/>
          <ul class="nav-links">
            <li class="nav-item">
              <a class="nav-item-black" href="https://openbot.gitbook.io/project/">Install</a>
            </li>
          </ul>
        </div>
      </MediaQuery>


      <MediaQuery minDeviceWidth={941}>
        <div className="Header Section">
          <div className="Header-lead">
            <h1>Crowd-sourced <br /> crypto trading bots</h1>
            <h3 className="Header-text">Submit strategies or implement new features, <br /> the first openbot virtual hackathon is live</h3>
            <a className="Button-simple" href="https://github.com/openbot-tech/core/issues?utf8=%E2%9C%93&q=label%3A%22help+wanted%22">Join Competition</a>
          </div>
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Dg46tX_ms7Y?autohide=1&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={940}>
        <div className="Header-mobile Section-mobile">
          <div className="Header-lead-mobile">
            <h1>Crowd-sourced <br /> crypto trading bots</h1>
            <h3 className="Header-text">Submit strategies or implement new features, <br /> the first openbot virtual hackathon is live</h3>
            <a className="Button-simple" href="https://github.com/openbot-tech/core/issues?utf8=%E2%9C%93&q=label%3A%22help+wanted%22">Join Competition</a>
          </div>
          <div className="video-container-mobile">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Dg46tX_ms7Y?autohide=1&autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </MediaQuery>

<MediaQuery minDeviceWidth={941}>
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
          <img src={stackpic} id="logos" alt="stack"/>
          </a>
          <div className="App-text">
            <h3>Modular architecture</h3>
            <p className="description-text">We plan to also support market-making, <br /> arbitrage and dedicated DeFi strategies</p>
          </div>
        </div>
        <div className="App-list">
          <a className="App-link" href="https://github.com/openbot-tech">
          <img src={testpic} id="logos" alt="test"/>
          </a>
          <div className="App-text">
            <h3>Full test coverage</h3>
            <p className="description-text">Openbot has enterprise-grade unit, <br /> integration and end-to-end tests</p>
          </div>
        </div>
      </div>
      </fieldset>
      </MediaQuery>
      <MediaQuery maxWidth={940}>
            <fieldset>
            <legend id='features'>FEATURES</legend>
            <div className="Features-mobile Section-mobile">
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
                <img src={stackpic} id="logos" alt="stack"/>
                </a>
                <div className="App-text">
                  <h3>Modular architecture</h3>
                  <p className="description-text">We plan to also support market-making, <br /> arbitrage and dedicated DeFi strategies</p>
                </div>
              </div>
              <div className="App-list">
                <a className="App-link" href="https://github.com/openbot-tech">
                <img src={testpic} id="logos" alt="test"/>
                </a>
                <div className="App-text">
                  <h3>Full test coverage</h3>
                  <p className="description-text">Openbot has enterprise-grade unit, <br /> integration and end-to-end tests</p>
                </div>
              </div>
            </div>
            </fieldset>
            </MediaQuery>

<MediaQuery minDeviceWidth={941}>
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
    </MediaQuery>
    <MediaQuery maxWidth={940}>
          <fieldset>
          <legend id='strategies'>STRATEGIES</legend>
            <div className="Contribute-mobile Section-mobile">
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
        </MediaQuery>

    <MediaQuery minDeviceWidth={941}>
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
    </MediaQuery>
    <MediaQuery maxWidth={940}>
      <fieldset>
      <legend id='governance'>GOVERNANCE</legend>
        <div className="Vision Section-mobile">
          <div>
            <h1>Towards a decentralized tradingbot community</h1>
            <p id="text">Join us discussing & developing free, open-source trading algorithms.</p>
            <a className="Button-simple" href="https://docs.google.com/document/d/1Lwe9McxjwQhRvfU2domiRhuSC0pCJ3uLLh-xkARFePM/edit?usp=sharing">Vision Paper</a>
          </div>
        </div>
      </fieldset>
    </MediaQuery>

      <div id="footer">
        <ul class="nav-links">
        <li class="nav-item">
          <a className="App-link" href="https://twitter.com/openbot_tech">
            <img src={twittericon} id="icons" alt="twitter"/>
          </a>
        </li>
        <li class="nav-item">
          <a className="App-link" href="https://medium.com/openbot-tech">
            <img src={mediumicon} id="icons" alt="medium blog"/>
          </a>
        </li>
        <li class="nav-item">
          <a className="App-link" href="https://discord.gg/6d4v6YC">
            <img src={discordicon} id="icons" alt="discord chat"/>
          </a>
        </li>
        </ul>
      </div>

    </div>
    );
  }
}

export default App;
