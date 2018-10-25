import React from 'react'
import './dadaca.css'
import foto from '../../foto/dadaca.jpg'

function Dadaca(props)
{
  return (
    <div className="dadaca-flex">
       <div className="paragraf">
          <p>Dădacă pentru o oră este o altă ofertă marca "Academia Piticilor" și este destinată părinților care s-au confruntat cu situații în care au avut nevoie urgent să plece undeva pentru o oră, însă nu au cu cine să-și lașe copilul. Angajații centrului vor petrece împreună cu copilașul activități și jocuri compatibile cu vârsta piciului. Mai mult, dădaca are grijă să selecteze materialele educative și în funcție de capacitățile individuale ale lui.</p>
        </div>
        <div>
          <img src={foto} alt="" className="right-img"></img>
        </div>
    </div>
  )
}

export default Dadaca
