import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import store from './store';
import LoginComponent from './components/login';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Route exact path="/" component={LoginComponent}/>
        </Router>
    </Provider>
  );
}

export default App;
