import './styles.css';

import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider as ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const PublicLayout = ({menu, ...props}) => {

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

  return (
      <ThemeProvider theme={ theme }>
      <div className='colorbg wrapper flex col'>
        <CssBaseline />
        <div className="flex1 flex">
          <Suspense fallback=" ">
              {
                menu.map((e) => {
                  return <Route key={e.path} exact={e.exact} path={ e.path } component={ e.component } />
                })
              }
          </Suspense>

        </div>
      </div>
      </ThemeProvider>
  );
}

export default PublicLayout;
