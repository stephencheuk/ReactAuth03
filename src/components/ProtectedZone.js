
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

const ProtectedZone = ({children, inverse}) => {

  const result = useSelector((state) => state.App);

//  const history = useHistory();
//
//  useEffect(()=>{
//    if(!inverse && !result.loggedIn){
//      history.push('/Login');
//    }
//  }, [result.loggedIn, history]);

  if(inverse){
    return !result.loggedIn ? <> { children } </> : null;
  }else{
    return result.loggedIn ? <> { children } </> : null;
  }
}

export default ProtectedZone;