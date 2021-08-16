import { withRouter } from 'react-router-dom';
import Layout from '../../components/Layout';
// import ProtectedZone from '../../components/ProtectedZone';
// import PrivateRoute from '../../components/PrivateRoute';

import { UserContextProvider } from '../../contexts/user';


import { publicMenu, privateMenu } from './menu';

// const Dashboard = () => <>Dashboard</>;
// const Settings = () => <>Settings</>;
// const Home = () => <>Home</>;
// const AboutUs = () => <>AboutUs</>;
// const Login = () => <>Login</>;

const App = ({history}) => {

  return (
    <UserContextProvider>
        <Layout { ...{ menu : publicMenu, private_menu: privateMenu } } />
    </UserContextProvider>
  );
}

export default withRouter(App);
