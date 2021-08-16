import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import {
  Button,
} from '@material-ui/core';

const Logout = () => {

  const dispatch = useDispatch()

  let history = useHistory();

  const LogoutNow = () => {
    dispatch({ 'type': 'LOGOUT' });
    history.push("/");
  }

  useEffect(()=>{
    LogoutNow();
  });

  return (
    <Button type='button' variant="contained" color="primary" onClick={ LogoutNow }>Logout</Button>
  );
}

export default Logout;
