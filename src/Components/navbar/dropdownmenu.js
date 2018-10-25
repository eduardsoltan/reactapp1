import React from 'react'
import './dropdownmenu.css'
import {NavLink} from 'react-router-dom'

function Dropdown(props)
{
   let a='dropdown2-menu'
   if(props.open1)
   {
      a='dropdown2-menu open'
   }
    return (
        <div className={a}>
            <ul className="dropdownlist">
                <NavLink to="/" className="link-nav" onClick={props.close}><li>Acasa</li></NavLink>
                <NavLink to="" className="link-nav" onClick={()=>props.gradinita(0)}><li>Gradinita</li></NavLink>
                {
                  props.render[0]?(
                    <div className="drop1">
                       <ul className="drop-ul">
                       <NavLink to="/Grupe" className="dropitem" onClick={props.close}><li>Componeta grupelor</li></NavLink>
                       <NavLink to="/Tarife" className="dropitem" onClick={props.close}><li>Tarife</li></NavLink>
                       <NavLink to="" className="dropitem" onClick={props.close}><li>Acte de Inscriere</li></NavLink>
                       </ul>
                    </div>
                  ):
                  null
                }
                <NavLink to="" className="link-nav" onClick={()=>props.gradinita(1)}><li>Oferte si Activitati</li></NavLink>
                {
                  props.render[1]?(
                    <div className="drop1">
                    <ul className="drop-ul" >
                       <NavLink to="/Gradinita" className="dropitem" onClick={props.close}><li>Gradinita</li></NavLink>
                       <NavLink to="" className="dropitem" onClick={props.close}><li>MiniGradinita</li></NavLink>
                       <NavLink to="/pregatirepentruscoala" className="dropitem" onClick={props.close}><li>Pregatire pentru Scoala</li></NavLink>
                       <NavLink to="/dadaca" className="dropitem" onClick={props.close}><li>Dadaca pentru o Ora</li></NavLink>
                    </ul>
                    </div>
                  ):
                  null
                }
                <NavLink to="/Nutritie" className="link-nav" onClick={props.close}><li>Nutritie</li></NavLink>
                <NavLink to="/Contact" className="link-nav" onClick={props.close}><li>Contact</li></NavLink>
            </ul>
        </div>
    )
}

export default Dropdown
