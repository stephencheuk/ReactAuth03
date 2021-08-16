import {
    Button
} from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signInWithGoogle } from "../../services/auth";

const SignIn = ({classes, onLoginSuccess}) => {

  const [, setUser] = useContext(UserContext).user;

  const signInClick = async (e) => {
      let SignedUser = await signInWithGoogle();
      if(SignedUser) setUser(SignedUser);
      onLoginSuccess({Token: SignedUser.refreshToken, Name: SignedUser.displayName, Email: SignedUser.email, ProfileImg: SignedUser.photoURL});
      e.preventDefault();
  }
    
  return <Button
    color="primary"
    className={classes.button}
    startIcon={
        <div className={classes.iconGoogle}>G</div>
    }
    onClick={ signInClick }
    > Google </Button>
}

export default SignIn;