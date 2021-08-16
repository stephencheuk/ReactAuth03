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
}));

const Dashboard = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ height: "1000px" }}>Setting</div>
    </div>
  );
}

export default Dashboard;
