import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../foto/download.jpeg'
import './Navbar.css'
import Media from 'react-media'
import TogleButton from './toogeleButton.js'


class Navbar extends Component{
      constructor(props)
    {
        super(props);
        this.state={
            isTrue: [false,false,false]
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleMouse=this.handleMouse.bind(this)
    }
    handleClick(index)
    {

        this.setState({
            isTrue: this.state.isTrue.map(function(item,a){
                if(a===index)
                 return true;
                 else
                 return false;
            })

        })

    }
    handleMouse()
    {

        this.setState({
            isTrue:  this.state.isTrue.map(function(item,a){

                 return false;
            })

        })
    }

    render()
    {

    return(
        <Media query="(min-width: 1000px)">
          {
              matches=>
              matches?(
                <div className="divblock">
                <img src={logo} alt="" className="img"></img>
                <NavLink to="/">Acasa</NavLink>
                <div className={this.state.isTrue[1]?"block":""} onMouseOver={this.handleClick.bind(this,1)} onMouseLeave={this.handleMouse}>
                <NavLink  to="" >Gradinita</NavLink>

                 {this.state.isTrue[1]?
                    <div className="block1" onMouseLeave={this.handleMouse}>
                       <NavLink to="/Grupe" className="a1 a4">Componeta grupelor</NavLink>
                       <NavLink to="/Tarife" className="a2 a4">Tarife</NavLink>
                       <NavLink to="" className="a3 ">Acte de Inscriere</NavLink>
                    </div>:null
                 }
                 </div>
                 <div className={this.state.isTrue[2]?"block":""} onMouseEnter={this.handleClick.bind(this,2)} onMouseLeave={this.handleMouse}>
                <NavLink to="">Oferte si Activitati</NavLink>
                {this.state.isTrue[2]?
                    <div className="block1" >
                       <NavLink to="/Gradinita" className="a4">Gradinita</NavLink>
                       <NavLink to="" className="a4">MiniGradinita</NavLink>
                       <NavLink to="/pregatirepentruscoala" className="a4" onClick={this.props.show}>Pregatire pentru Scoala</NavLink>
                       <NavLink to="/dadaca" >Dadaca pentru o Ora</NavLink>
                    </div>:null
                 }
                </div>
                <NavLink to="/Nutritie">Nutritie</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
             </div>
              ): (
                  <div className="block2">
                      <div className="block3">
                         <img src={logo} alt="" className="img2"></img>                  
                      </div>
                      <TogleButton click={this.props.clickhandle} />


                  </div>
              )
          }

        </Media>
    )}
}

export default Navbar
