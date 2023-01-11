import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaRegHandPointUp, FaAccusoft,FaBeer,house } from 'react-icons/fa'
const Sidebar = ({children}) => {
    const menulist = [
        {
            path: "/about",
            name: "About",
            icon: < FaAccusoft / >
        }
    ];
    return ( 
        < div className="container">
        <div className="sidebar">
          <div className="top_section">
           <h1 className="logo"> logo</h1>
           <div className="bars">
            <house/>
           </div>
          </div>
          {
            menulist.map((item,index)=>(
                <NavLink exact activeClassName="active" to={item.path} key={index} className="nav-link" >
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                </NavLink>
            ))
          }
        </div>
        <main>{children}</main>
        </div>
    );
};


export default Sidebar;