import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from './Components/Main';
import Footer from './Components/Footer';

import Landing from './Components/home/Landing';
import Movie from './Components/home/Movie';

import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Main />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;