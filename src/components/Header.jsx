import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header-container'>
        <Navbar/>
        <div className='header-text-container'> 
          <div className='header-text'>
            <h4>
              Not only people<br/>
              need a house
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Obcaecati, est!
              Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Aspernatur, quibusdam?
            </p>
            <button>Make a Friend</button>
          </div>
        </div>

       
    </div>
  )
}

export default Header