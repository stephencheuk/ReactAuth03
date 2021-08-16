import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import './AppBar.css';

const AppBar = ({ children, className }) => {

  const elm = children() || {};
  const loggedIn = useSelector((state) => state.sessionReducer ? state.sessionReducer.loggedIn : false);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log('history', history);

  return (
    <>
      <div className={ clsx('Appbar', className) }>
        {
          (elm['menu'] || elm['logo']) &&
          <div className="AppbarMenuLogo colorbg">
            { elm['menu'] && <div className="AppbarMenu"> { elm['menu'] } </div> }
            { elm['logo'] && <div className="AppbarLogo"> { elm['logo'] } </div> }
             <div className="AppbarLogin">
               <span>
               {
                 loggedIn ? "Hi, User" : "Hi, Guest"
               }
               </span>
               <button onClick={
                   () => {
                     dispatch({ type : (loggedIn ? "session logout" : "session login") });
                     history.push(`/`)
                   }
                 }>
               {
                 loggedIn ? "Logout" : "Login"
               }
               </button>
             </div>
          </div>
        }
        {
          (elm['title'] || elm['search']) &&
          <div className="AppbarTitle">
            { elm['title'] }
          </div>
        }
        {
          elm['right'] && 
          <div className="AppbarRight">
            { elm['right'] }
          </div>
        }
      </div>
    </>
  );
}

export default AppBar;
