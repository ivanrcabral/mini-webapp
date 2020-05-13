// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './App/Components/Home/home';
import Movie from './App/Components/Movie/movie';
import * as serviceWorker from './serviceWorker';

//import Movie from './App/Components/Movie';

import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';

ReactDOM.render(
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/movie" component={Movie} />
    </Router>
  ,
  document.getElementById("root")
);

serviceWorker.unregister();



