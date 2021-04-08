
import './App.css';
import SafeRideDataLoad from './Components/SafeRideDataLoad/SafeRideDataLoad';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from './Components/Destination/Destination';
import RentDetails from './Components/RentDetails/RentDetails';
import MenuBar from './Components/MenuBar/MenuBar';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();
function App() {
 const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <SafeRideDataLoad></SafeRideDataLoad>
          </Route>
          <Route path="/home">
            <SafeRideDataLoad></SafeRideDataLoad>
          </Route>
          <Route path="/destination/:id">
            <Destination></Destination>
          </Route>
          <PrivateRoute path="/rent/:id">
            <RentDetails></RentDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
