import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [nav, setnav] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false)
        } 
    }
    window.addEventListener('scroll', changeBackground)
  return (
    <div className={nav ? 'navbar-container active' : 'navbar-container'}>
      <div className='navbar-logo'>
          <h3>Doggy's House</h3>
      </div>
        <nav className='navbar-nav'>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About The Shelter</a></li>
                <li> <a href="#">To Help The Shelter</a></li>
                <li> <a href="#">Contacts</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar