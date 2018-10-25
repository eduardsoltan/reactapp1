import React from 'react'
import pira from '../foto/piramida.jpg'
import './nutritie.css'

function Nutritie(props){

   return (
     <div className="nutritie">


        <div className="nut1">
          <p  style={{color: "#dfb816"}}>În instituţia noastră copiii se alimenteză conform meniurilor de repartiţie, care sunt întocmite în conformitate cu meniurile model pentru 10 zile, elaborate de Ministerul Sănătăţii. Sunt aprobate de către Centrul de Sănătate Publică mun.Chişinău.</p>
          <p  style={{color: "#df3416"}}>Conform regimului zilei copiii primesc 4 mese în zi.</p>
          <p  style={{color: "#4516df"}}>Bucatele sunt preparate în bucătăria proprie de către Bucătarul ce are un stagiu de activitate de 24 ani.</p>
          <p  style={{color: "#df16a4"}}>Produsele alimentare proaspete şi de calitate sunt achiziţionate de la magazinul “Metro – 2”.</p>
          <p  style={{color: "#446b5e"}}>Sufrageria instituţiei este dotată cu mobilier comod, corespunzător vîrstei copiilor.</p>
          <p  style={{color: "#16df19"}}>Bucatele gustos preparate, vesela de culoare deschisă cu desene şi amenajarea frumoasă a mesei aduc copiilor pofta şi plăcerea servirii mesei.</p>
          <p  style={{color: "#b5df16"}}>Pe parcursul săptămînii bucatele sunt variate şi nu se repetă. În fiecare zi copiii primesc norma naturală de produse alimentare.</p>
          <p style={{color: "#16d0df"}}>Alimentele şi servirea mesei reprezintă pentru preşcolari o nouă oportunitate de a explora şi de a culege informaţii.</p>
          <p style={{color: "#df1649"}}>La deservirea mesei participă copiii de serviciu</p>
        </div>
        <div className="nut2">
          <img src={pira} alt="" className="nut-img"></img>
        </div>
     </div>
   )
}

export default Nutritie
