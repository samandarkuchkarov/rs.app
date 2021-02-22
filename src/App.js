import React, {useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes'
import { NavbarNoAuth } from './components/NavbarNoAuth'
import { Navbar } from './components/Navbar'
import 'materialize-css'



function App() {
  let condition1;
  let condition2;

  
  if(localStorage.getItem('email')==null){
    condition1 = false;
  }else{
    condition1 = true;
    if(localStorage.getItem('mentor') === 'false'){
      condition2 =false
    }else{
      condition2 = true
    }
  }
  const [repeat,rerepeat] = useState('norepeat')
  const [forlogin,setforlogin] = useState('norepeat')
  const routes = useRoutes(condition1, condition2,setforlogin)
  let nav;
  if(localStorage.getItem('email')=== null){

    nav =<NavbarNoAuth reapeat={rerepeat} /> 
  }else{
    nav =<Navbar setforlogin = {setforlogin} /> 
  }
  return (
      <Router>
       {nav}
        <div className="wrap">
          {routes}
        </div>
      </Router>
    
  )
}

export default App;
