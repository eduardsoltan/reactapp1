import React from 'react'
import { faChild,faShip,faCar,faPlaneDeparture,faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './grupe.css'

function Grupe(props){
  return (
    <div>
     <h2 className="title-grup">Se formeaze 5 grupe de maxim 12 copii</h2>
    <div className="grup-flex">
        <div className="flex3">
          <FontAwesomeIcon icon={faChild} className="grup-icon r"/>
          <h4>Grupa Mini</h4>
          <p>1,5-3 ani</p>
        </div>
        <div className="flex3">
           <FontAwesomeIcon icon={faShip} className="grup-icon"/>
           <h4>Grupa Mica</h4>
           <p>3-4 ani</p>
        </div>
        <div className="flex3">
          <FontAwesomeIcon icon={faCar} className="grup-icon r"/>
          <h4>Grupa Medie</h4>
          <p>4-5 ani</p>
        </div>
        <div className="flex3">
          <FontAwesomeIcon icon={faPlaneDeparture} className="grup-icon"/>
          <h4>Grupa Mare</h4>
          <p>5-6 ani</p>
        </div>
        <div className="flex3">
          <FontAwesomeIcon icon={faBook} className="grup-icon r"/>
          <h4>Grupa Pregatitoare</h4>
          <p>6-7 ani</p>
        </div>
    </div>
    </div>
  )
}

export default Grupe
