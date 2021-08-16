import './styles.css';

import { Suspense, useState } from 'react';
import { MuiThemeProvider as ThemeProvider, createTheme as createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Menu as MenuIcon } from '@material-ui/icons';
import { CssBaseline } from '@material-ui/core';

import AppBar from './AppBar';
import Sidenav from './Sidenav';

import PrivateRoute from '../PrivateRoute';

const Layout = ({children, private_menu, ...props}) => {

  // const result = useSelector((state) => state.App);

  let theme = { 
                override: {
                  MuiTableRow: {
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }
                },
              };

  theme = createMuiTheme(theme || {});

  const [OpenRight, setOpenRight] = useState(false);
  const [OpenLeft, setOpenLeft] = useState(false);

  return (
      <ThemeProvider theme={ theme }>
      <div className='colorbg wrapper flex col'>
        <CssBaseline />
        <AppBar>
        {
          () => { return {
            menu : (
                          <div
                             style={{ cursor: "pointer", height: "100%", padding: 12 }}
                            onClick={() => { console.log("left menu clicked"); setOpenLeft(!OpenLeft); setOpenRight(false) } }
                          >
                            <MenuIcon />
                          </div>
                      ),
                       /* <div><div><EcoIcon style={{color:'green'}} />LOGO HERE</div></div> */
            logo : (
                        <div><img className='LogoImg' alt="logo" src={ `${process.env.PUBLIC_URL}/logo200.png` } /></div>
                      ),
            _title : (
                        <div>TITLE HERE { `${OpenLeft}|${OpenRight}` }</div>
                      ),
            right : (
                          <div
                            style={{ cursor: "pointer", height: "100%", padding: 12 }}
                            onClick={() => { console.log("right menu clicked"); setOpenLeft(false); setOpenRight(!OpenRight) } }
                          >
                            <MenuIcon />
                          </div>
                      ),
          }}
        }
        </AppBar>
  {/*
        <div className="jss5897">
          <div className="jss5901 jss5902 jss5899">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMDAgNDcuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwIDQ3LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkFGQUZBO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMCw0Ni45TDAsNDcuMVY4LjljMCwwLDIxLjEsMTQuMyw2NS4yLDE0LjFjNDAuNi0wLjIsNzYuNC0yMywxMjgtMjNDMjQzLjMsMCwzMDAsMTYuNCwzMDAsMTYuNFY0Ni45eiIvPgo8L3N2Zz4K" alt="decoration" className="jss5904" />
          </div>
        </div>
*/}
        <div className="AppSpace flex1 flex">
          <Sidenav { ...{ menu: private_menu, OpenRight, setOpenRight, OpenLeft, setOpenLeft } }/>

          <Suspense fallback=" ">
            <div className={ clsx("AppContainer", { 'LeftDrawerClosed': !OpenLeft }) }>

              {
                private_menu.map((e) => {
                  return <PrivateRoute key={e.link} exact={!!e.exact} path={ e.path } component={ e.component } />
                })
              }
            </div>
          </Suspense>
        </div>
      </div>
      </ThemeProvider>
  );
//  return (
//    <>
//      <div className='wrapper'>
//        <div className='Appbar'>
//          <div className='Appbar-Right'>
//            <div className='Appbar-Right-Block'>
//              <div><NavLink to="/Home" activeClassName="selected">Home</NavLink></div>
//              <div><NavLink to="/AboutUs" activeClassName="selected">About Us</NavLink></div>
//              <ProtectedZone>
//                <div><NavLink to="/Dashboard">Dashboard</NavLink></div>
//                <div>USER</div>
//                <div><Logout /></div>
//              </ProtectedZone>
//              <ProtectedZone inverse>
//                <div>GUEST</div>
//                <div><NavLink to="/Login">Sign In</NavLink></div>
//              </ProtectedZone>
//            </div>
//          </div>
//        </div>
//          <div className='AppContainer'>
//
//            { Sidenav ?
//              (
//                <div className='AppSidenav'>
//                  <div>
//                    <div><NavLink to="/Dashboard" activeClassName="selected">Dashboard</NavLink></div>
//                  </div>
//                  <div>
//                    <div><NavLink to="/Settings" activeClassName="selected">Settings</NavLink></div>
//                  </div>
//                </div>
//              ) : null
//            }
//            <div className='AppContent'>
//              <Route exact path={ ["/", "/Home"] } component={ Home } />
//              <Route exact path="/AboutUs" component={ AboutUs } />
//              <Route exact path="/Login" component={ login } />
//              <PrivateRoute exact path="/Dashboard" component={ Dashboard } />
//              <PrivateRoute exact path="/Settings" component={ Settings } />
//            </div>
//          </div>
//      </div>
//    </>
//  );
}

export default Layout;
