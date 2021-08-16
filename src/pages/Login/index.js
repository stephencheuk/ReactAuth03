import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import SignInwithGoogle from "../../components/SignIn/withGoogle";

import {
  Card,
  Grid,
  Button,
  Typography,
  Input,
  InputLabel,
  // IconButton,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import {
  GitHub as GitHubIcon,
  Facebook as FacebookIcon,
} from '@material-ui/icons';

import "./login.css";
import { privateMenu } from "../App/menu";
// import { UserContext } from '../../contexts/user';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  button: {
    margin: theme.spacing(1),
  },
  iconSize: {
    fontSize: "35px !important",
  },
  iconFacebook: {
    color: "#3f51b5",
  },
  iconGitHub: {
    color: "black",
  },
  iconGoogle: {
    backgroundColor: 'red',
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '35px !important',
    borderRadius: '50%',
  },
}));
const Login = ({ ...props }) => {

  const dispatch = useDispatch();

  const history = useHistory();

  console.log('login history', history);

  const classes = useStyles();

  // const [user, setUser] = useContext(UserContext).user;
  const result = useSelector((state) => state.App);

  useEffect(()=>{
    if(result.loggedIn) history.push(privateMenu[0].path);
  });

  const LoginNow = (e) => {

    const name = document.LoginFrom.Name.value;

    localStorage.setItem('token', name);
    dispatch({ type: 'LOGIN', name });

    history.push(privateMenu[0].path);

    e.preventDefault();
  };

  const onLoginSuccess = ({Token, Name, Email, ProfileImg}) => {
    dispatch({ type: 'LOGIN', payload: { Token, Name, Email, ProfileImg } });
    history.push(privateMenu[0].path);
  }

  return (
    <div className='flex1 flex'>
      <div className='LoginPage'>
        <Card className="LoginCard">
        <form name="LoginFrom" onSubmit={ LoginNow }>
          <div className='LoginPageTop'>
            <div>ERP System DEMO</div>
            <div>N/A</div>
          </div>

          <div className='LoginPageForm'>
            <Typography variant="h4" className="LoginCardTitle">Sign In</Typography>

            <Typography gutterBottom align="center" variant="caption" className="">3rd Party Access</Typography>

            <div className='Login3rdParty'>
              <div>
                <Button color="primary" className={classes.button} startIcon={<FacebookIcon className={clsx(classes.iconSize, classes.iconFacebook)} />}>Facebook</Button>
              </div>
              <div>
                <Button color="primary" className={classes.button} startIcon={<GitHubIcon className={clsx(classes.iconSize, classes.iconGitHub)} />}>GitHub</Button>
              </div>
              <div>
                <SignInwithGoogle {...{classes}} onLoginSuccess={ onLoginSuccess }/>
                
              </div>
            </div>

            <div>
              <hr className="hr-center-text" text="Or sign in with email" />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <InputLabel>Email</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Input type='text' name='Name' required fullWidth />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <InputLabel>Password</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Input type='password' name='Password' required fullWidth />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant="contained" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </form>
        </Card>
      </div>
    </div>
  );

}

export default Login;
