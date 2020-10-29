import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import store from './store';
import LoginComponent from './components/login';
import MainMenuComponent from './components/main';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div>
            <Route path="/">
              <Redirect to="/main"/>
            </Route>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/main" component={MainMenuComponent}/>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
          </div>
        </Router>
    </Provider>
  );
}

export default App;
