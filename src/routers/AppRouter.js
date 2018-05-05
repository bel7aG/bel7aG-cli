import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';

const Home = () => (
  <div>
    <div className="fake-box fake-div-one">
      <h1>Belhassen Gharsallah <br />Thank you to join my CLI <br /> bel7aG</h1>
    </div>
  </div>
);

const Career = () => (
  <div className="fake-box fake-div-one">
    <h1>Belhassen Gharsallah a Web Developer: React, Router, Redux, Webpack, SCSS, SVG, illustrator, HTML5, ES6, ES7</h1>
  </div>
);

const Contact = () => (
    <div className="fake-box fake-div-two">
      <a href="https://github.com/bel7aG" target="_blank">
        <h1>
          https://github.com/bel7aG
        </h1>
      </a>
    </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/Career" component={Career} />
        <Route path="/Contact" component={Contact} />
        {/* CODE YOUR ROUTERS HER */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
