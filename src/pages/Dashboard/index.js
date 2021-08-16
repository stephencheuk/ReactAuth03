import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import {
//   Paper,
//   Grid,
//   Card,
//   CardContent,
//   Box,
//   Typography,
//   Chip
// } from '@material-ui/core';

// import {
//   OndemandVideo as OndemandVideoIcon,
// } from '@material-ui/icons';

//import './Dashboard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  SummaryCard: {
    height: '126px',
    alignItems: 'flex-end',
    display: 'flex',
    padding: '10px',
    flexGrow: '1',
    marginBottom: '6px',
    justifyContent: 'space-between',
  },
  SummaryCardNumber: {
    color: '#fff',
    fontSize: '28px',
    fontWeight: '500',
  },
  SummaryCardText: {
    fontSize: '16px',
    color: '#fff',
    fontWeight: '400',
  },
  SummaryCardIconOuter: {
    textAlign: 'right',
  },
  SummaryCardIcon: {
    color: '#fff',
    opacity: '0.7',
    fontSize: '84px',
  }
}));

const Dashboard = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>

        1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
    </div>
  );
}

export default Dashboard;
