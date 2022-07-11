import React from 'react'

const Friends = (props) => {
  return (
    <div className='friends-container'>
        <div className='friends-card-container'>
            <img src={props.image}/>
            <h5>{props.name}</h5>
        </div>
    </div>
  )
}

export default Friends