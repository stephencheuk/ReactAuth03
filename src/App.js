import './App.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import ProtectedZone from './components/ProtectedZone';
import PrivateRoute from './components/PrivateRoute';
import login from './pages/login';
import Logout from './pages/logout';

const Dashboard = () => <>Dashboard</>;
const Settings = () => <>Settings</>;
const Home = () => <>Home</>;
const AboutUs = () => <>AboutUs</>;

const App = ({history, ...props}) => {

  const result = useSelector((state) => state.App);

  const Sidenav = ['', '/', '/Home', '/Login', '/AboutUs'].indexOf(history.location.pathname) == -1 ? true : false;

  return (
    <>
      <div className='wrapper'>
        <div className='Appbar'>
          <div className='Appbar-Right'>
            <div className='Appbar-Right-Block'>
              <div><NavLink to="/Home" activeClassName="selected">Home</NavLink></div>
              <div><NavLink to="/AboutUs" activeClassName="selected">About Us</NavLink></div>
              <ProtectedZone>
                <div><NavLink to="/Dashboard">Dashboard</NavLink></div>
                <div>USER</div>
                <div><Logout /></div>
              </ProtectedZone>
              <ProtectedZone inverse>
                <div>GUEST</div>
                <div><NavLink to="/Login">Sign In</NavLink></div>
              </ProtectedZone>
            </div>
          </div>
        </div>
          <div className='AppContainer'>

            { Sidenav ?
              (
                <div className='AppSidenav'>
                  <div>
                    <div><NavLink to="/Dashboard" activeClassName="selected">Dashboard</NavLink></div>
                  </div>
                  <div>
                    <div><NavLink to="/Settings" activeClassName="selected">Settings</NavLink></div>
                  </div>
                </div>
              ) : null
            }
            <div className='AppContent'>
              <Route exact path={ ["/", "/Home"] } component={ Home } />
              <Route exact path="/AboutUs" component={ AboutUs } />
              <Route exact path="/Login" component={ login } />
              <PrivateRoute exact path="/Dashboard" component={ Dashboard } />
              <PrivateRoute exact path="/Settings" component={ Settings } />
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
