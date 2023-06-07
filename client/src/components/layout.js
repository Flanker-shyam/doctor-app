import React from 'react'
import "../styles/layout.css"
import { SidebarMenu } from '../data/data'
import{Link,useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function Layout({children}) {
  const {user}=useSelector((state)=>state.user)
  const location=useLocation()
  return (
   <> 
  <div className='main'>
    <div className='layout'>
          <div className='sidebar'>
<div className='logo'>
 <h6>DOC APP  </h6>
 <hr />
  </div>
<div className='Menu'></div>
{SidebarMenu.map(menu=>{
  const isActive= location.pathname  === menu.path
  return(
    <>
    <div className={`menu-item ${isActive && "active"}`}>
      <i className={menu.icon}></i>
      <Link to={menu.path}>{menu.name} </Link>
    </div>
    
    </>
  );

})}
        </div>
        <div className='content'>
        <div className='header'>
          <div className='header-content'>
            <i class ="fa-solid fa-bell"></i>
            <Link to="/profile">{user?.name}</Link>
            </div> 
          
          </div>
        <div className='body'>{children}</div>
        </div>

    </div>
  </div>

   </>
  )
}

