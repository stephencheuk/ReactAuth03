
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({...props}) => {

  const result = useSelector((state) => state.App);

  console.log('PrivateRoute', props);

  const { component, render, ...props2nd } = props;

  return result.loggedIn ? <Route { ...props } /> : <Route { ...props2nd } render={()=><Redirect to='/Login' />} />;
}

export default PrivateRoute;