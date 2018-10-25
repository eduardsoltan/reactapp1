import React from 'react'
import './background.css'
import child from '../foto/images.png'


function Background(props){

    
     
    return (
        <div className="background1">
          <div className="backflex">
            <h1>{props.name}</h1>
           
            <img src={child} alt=""></img> 
          </div>
                
        </div>
    )
}

export default Background