import React, { Component } from 'react';
import ISBNSearchFeature from './Features/ISBNSearchFeature'
import BulkUploadRefinementsFeature from './Features/BulkUploadRefinementsFeature'

class App extends Component {
  render() {
    return (
      <div>
      <BulkUploadRefinementsFeature/>
      </div>
    );
  }
}

export default App;
