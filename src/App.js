import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js';
import router from './router/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          
          <Router>
            {router}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
