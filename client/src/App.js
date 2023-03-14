import Date from './components/DateAndDay';
import { StrictMode, useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import Signup from './components/SignUp/Signup';


const api_base = 'http://localhost:3001';
// const api_base = 'mypendinglist.netlify.app';

function App({ uname, email }) {
  const [isSignIn, setSignIn] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleSignIn = (val) => {

    // setSignIn(localStorage.getItem('isSignIn'));
    setUserName(val)
    setSignIn(true);
  }
  const logOutHand = () => {
    setUserName('');
    setPassword('');
    setSignIn(false);
    setUserName(localStorage.removeItem('userName'))
    // setSignIn(localStorage.removeItem('isSignIn'))
  }
  console.log(`from app ${userName}`);
  return (
    <div className="App">

      {!isSignIn && <Signup isSignIn={isSignIn} onSignIn={handleSignIn} />}
      {isSignIn && <button onClick={logOutHand}>Log Out</button>}
      {console.log(`username as para form app: ${userName}`)}
      {isSignIn && <ToDo data={[userName, password, isSignIn]} />}
    </div>
  );
}
export default App;