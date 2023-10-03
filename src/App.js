import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import Logout from './components/Logout';
import Course from './config/course';

function App() {
  const [isLogin, SetIslogin] = useState(false)


  const loginHandler = (mail,pass) => {
    SetIslogin(true);
    localStorage.setItem("isLogin", '1')
  }
  const logoutHandler = () => {
    SetIslogin(false);
  }
  return (
    <div className="App">
      {/* {!isLogin && <Login onLogin={loginHandler} />}
      { isLogin && <Logout  onLogout={logoutHandler}/>}    */}
      {/* <Login /> */}
       <Course/>
    </div>
  );
}

export default App;
