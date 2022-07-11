import React from 'react'
import dogandcat from '../media/dogandcat.png'

const About = () => {
  return (
    <div className='about-container'>
        <img src={dogandcat} alt=''/>
        <div className='about-text'>
            <h4>
                About The Shelter <br/>
                "Doggy's House"
            </h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Delectus sit atque accusamus quam provident ipsa!
            <br/>
            
                
            </p>
        </div>

    </div>
  )
}

export default About