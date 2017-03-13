import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore  , applyMiddleware} from 'redux'
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import BulkUpload from './Containers/BulkUpload'

import reducers from './Reducers'
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class BulkUploadRefinementsFeature extends Component {
  constructor(){
    super();
    injectTapEventPlugin();
  }
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <BulkUpload/>
      </div>
    </Provider>
    );
  }
}

export default BulkUploadRefinementsFeature;
