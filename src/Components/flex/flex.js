import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './flex.css'
import Media from "react-media";



class Flex extends Component{
    constructor(props){
        super(props);
        this.state={
            width: 'adsas'
        }

    }


    render(){


    return(
        <div>
            <Media query="(min-width: 1300px)">
              {
                  matches=>
                  matches?(
                    <div className="box">
                    <div className="box1 color1">
                       <h2>Gradinita</h2>
                       <p>Academia Piticilor își deschide ușile la ora 8.00, iar copiii rămân în această ...</p>
                       <NavLink to="/Gradinita">Mai mult...</NavLink>
                    </div>
                    <div className="box1 color2">
                        <h2>Contact</h2>
                        <p>Adresa: Chișinău, Ciocana, bulevardul Mircea cel Bătrân, 33 ...</p>
                        <NavLink to="/Contact">Mai mult...</NavLink>
                    </div>
                    <div className="box1 color3">
                        <h2>Nutritie</h2>
                        <p>În instituţia noastră copiii se alimenteză conform meniurilor de repartiţie...</p>
                        <NavLink to="/Nutritie">Mai mult...</NavLink>
                    </div>
                    </div>
                  ):(
                      <div className="hidden">
                          <NavLink to="/Gradinita" className="hidden-link colo1">Acasa</NavLink>
                          <NavLink to="/Contact" className="hidden-link colo2">Contact</NavLink>
                          <NavLink to="/Nutritie" className="hidden-link colo3">Nutritie</NavLink>
                      </div>
                  )
              }
            </Media>
        </div>
    );


    }
}
export default Flex
