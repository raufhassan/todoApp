import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { logoutUser } from "./redux/actions/authActions";
import { setCurrentUser } from "./redux/actions/authActions";
//components
import Navbar from "./components/Nav/index"
import Signup from "./components/auth/signup/index"
import Login from "./components/auth/login/index"
import Homepage from "./components/home/Homepage"
import AddItem from "./components/addItems/index"
import Items from "./components/itemList/index"
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = "http://localhost:3000/login";
  }
}

function App() {
  return (
    <div >
  <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addItem" component={AddItem} />
            <Route exact path="/allItems" component={Items} />

            
          </Switch>
        </Router>
      </Provider>    </div>
  );
}

export default App;
