
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

const Dashboard = () => <>Dashboard</>;
const Settings = () => <>Settings</>;

const Layout = ({children, inverse}) => {

  const result = useSelector((state) => state.App);

  return (
    <>
      <div className='AppSidenav'>
        <div>
          <div><Link to="/Dashboard">Dashboard</Link></div>
        </div>
        <div>
          <div><Link to="/Settings">Settings</Link></div>
        </div>
      </div>
      <div className='AppContent'>
        <PrivateRoute exact path="/Dashboard" component={ Dashboard } />
        <PrivateRoute exact path="/Settings" component={ Settings } />
      </div>
    </>
  );

}

export default Layout;