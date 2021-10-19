import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Doctors from './Pages/Home/Doctors/Doctors';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRout/PrivateRoute';
import Servicedetail from './Pages/Home/ServiceDetail/Servicedetail';
import NotFound from './Pages/Home/notFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute exact path="/serviceDetail/:id">
              <Servicedetail></Servicedetail>
            </PrivateRoute>

            <Route exact path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
