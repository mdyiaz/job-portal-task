
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/Authprovider';

function Navbar() {

// const {user, logOut} = useContext(AuthContext);
const {user, logOut} = useContext(AuthContext)


const handleLogOut = () =>{
  logOut()
  .then(() => {})
  .catch(err => console.error(err));
}

  const menuItem = (
    <>
      <li className='text-white font-bold'>
        <Link to="/">Home</Link>
      </li>
      
      
      <li className='text-white font-bold'>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className='text-white font-bold'>
        <Link to="/about">About Us</Link>
      </li>
    </>
  )

  return (
    <div className="shadow-lg">
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-black"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Job Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end">
         
          { user?.uid ?  
                    <>
                        <li><button className='btn text-white btn-secondary' onClick={handleLogOut}>Log Out</button></li>
                        
                    </>
                    :
                    <li><Link className='btn text-white btn-secondary' to='/login'>Login</Link></li>
               }

        </div>
      </div>
    </div>
  )
}

export default Navbar
