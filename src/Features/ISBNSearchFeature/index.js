import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore  , applyMiddleware} from 'redux'
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import ISBNSearch from './Containers/ISBNSearch'
import SaveBlock from './Components/SaveBlock'

import reducers from './Reducers'
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class ISBNSearchFeature extends Component {
  constructor(){
    super();
    injectTapEventPlugin();
  }
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <SaveBlock/>
        <ISBNSearch/>
      </div>
    </Provider>
    );
  }
}

export default ISBNSearchFeature;
