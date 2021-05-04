import React from 'react';
import logo from '../../images/logo1.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
       <nav>
           <div className='font'  >Cars24</div>
           <input className ='menu-btn' type='checkbox' id='menu-btn'/>
           <label className='menu-icon' for='menu-btn'>
               <span className='nav-icon'></span>
           </label>
           <ul className='menu'>
               <li><a href='#'className='active'>Home</a></li>
               <li><Link to={`/customer`}>Customer</Link></li>
               <li><Link to='/payment'>Payment</Link></li>
               <li><Link to='/order'>Order </Link></li>
           </ul>
           {/* <a href='#' className='property'>Sign in</a> */}
       </nav>

    )
    
}

export default Navbar;
