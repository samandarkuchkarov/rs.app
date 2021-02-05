import React, {useState,useEffect, useRef } from 'react'
import { NavLink} from 'react-router-dom'


import M from 'materialize-css'
 
export const Navbar = ({setforlogin}) => {
    let [status1,setStatus1] = useState('flex');
    let [status2,setStatus2] = useState('none');
    let menuRef = useRef()
    useEffect(()=>{
        document.addEventListener('mousedown',(e)=>{
            if(menuRef.current=== null){
                return
            }
      
          if(!menuRef.current.contains(e.target)){
            setStatus1('flex')
            setStatus2('none')
          }
        })
    })
    const logoutHandler = event => {
     localStorage.removeItem('email')
     setforlogin('s')
    }

    M.AutoInit();

    return (
        <nav> 
            
            <div className="nav-wrapper blue-grey darken-1">
                    <NavLink to="/" className="brand-logo">Home</NavLink>
                    <ul className="right">
                         <li onClick={()=>{ setStatus1('none'); setStatus2('flex'); }} className = {status1}><div className='pointer' >My Profile<i className="material-icons right">arrow_drop_down</i></div></li>
                         <ul ref = {menuRef} className = {[status2,'drop'].join(' ')} >
                              <li><NavLink to="profile"><i className="material-icons left">visibility</i>View</NavLink></li>
                              <li className="divider"></li>
                              <li><NavLink to="" onClick={logoutHandler}><i className="material-icons left">exit_to_app</i>Logout</NavLink></li>
                        </ul>
                    </ul>
                    
            </div>
        </nav>
    )
}