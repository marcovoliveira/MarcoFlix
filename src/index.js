import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegisterVideo from './pages/register/Video'
import RegisterCategory from './pages/register/Category';


const Page404 = () => (<div>404 Not found</div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={Page404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

