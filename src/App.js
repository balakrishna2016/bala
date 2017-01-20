import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'

import reducers from './redux/reducers'


import Header from './components/header'
import Body from './components/body'


class App extends Component {
  render() {
    return (
      
      <Provider store={createStore(reducers)}>
      <div>
        <Header/>
        <Body />
      </div>
      </Provider>

    );
  }
}

export default App;
