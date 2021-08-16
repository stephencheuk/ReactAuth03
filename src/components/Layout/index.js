import PublicLayout from './PublicLayout';
import PrivateLayout from './PrivateLayout';
import { withRouter } from 'react-router-dom';

const Layout = (props) => {

  const PublicPageLink = ['', '/', '/Home', '/Login', '/AboutUs'].indexOf(props.history.location.pathname) >= 0 ? true : false;

  console.log('PublicPageLink', PublicPageLink);
  console.log('Layout props', props);

  return PublicPageLink ? <PublicLayout { ...props }/> : <PrivateLayout { ...props }/>;

}

export default withRouter(Layout);
