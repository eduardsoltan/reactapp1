import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faMap,faAt,faClock } from '@fortawesome/free-solid-svg-icons'
import './icons.css'

function Icons(props)
{
  return (
    <div className="icon1">
       <div className="struct">
         <FontAwesomeIcon icon={faPhone} className="icon y1"/>
         <h3>Telefon</h3>
         <p>0698 30 086</p>

       </div>
       <div className="struct">
          <FontAwesomeIcon icon={faMap} className="icon r1"/>
          <h3>Locatia</h3>
          <p>Ciocana, bulevardul Mircea cel Bătrân, 33 </p>
        </div>

       <div className="struct">
        <FontAwesomeIcon icon={faAt} className="icon y1"/>
        <h3>Email</h3>
        <p>academiapiticilor@gmail.com</p>
       </div>

       <div className="struct">
         <FontAwesomeIcon icon={faClock} className="icon r1"/>
         <h3>Program</h3>
         <p> 8.00-18.00</p>

       </div>
    </div>
  );
}

export default Icons
