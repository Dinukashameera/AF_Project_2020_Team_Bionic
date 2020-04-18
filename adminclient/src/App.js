import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from './components/LoginRegister/Login';
import HeaderSideMenuFooter from './components/HeaderSideMenuFooter/HeaderSideMenuFooter';

function App() {

 

  console.log('Admin Token : ' ,localStorage.userLoginToken)
  return (
    <Router>
    <div className="App">


    <Route path = "/login" component={Login} />
    <HeaderSideMenuFooter/>  
    




    
     
     
  

    </div>
    </Router>
  );
}

export default App;
