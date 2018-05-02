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
    <h1>Belhassen Gharsallah a Web Developer: JS JSX ES6 ES7 React Jest Sass Git SVG </h1>
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

const NotFound = () => (
  <div className="not-found">Not Found 404</div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/Career" component={Career} exact/>
        <Route path="/Contact" component={Contact} exact/>
        {/* CODE YOUR ROUTERS HER */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
