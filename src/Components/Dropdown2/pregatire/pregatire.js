import React from 'react'
import './pregatire.css'
import foto from '../../foto/scoala.jpeg'

function Pregatire(props){


  return (
    <div className="pregtire-div">
      <div className="text1">
          <p>Pentru copiii merg în această toamnă la școală, "Academia Piticilor" oferă lecții de pregătire pentru școală, între orele 13:00-14:30 sau 15:00-16:30. Activitățile de bază sunt foarte atent selectate și au drept scop: dezvoltarea limbajului, cursuri de limba română, exerciții de logică, matematică și educație artistico-plastică. La acest curs copiii se aleg cu formarea interesului de a cunoaște și a dorinței de a învăța lucruri noi; dezvoltarea logicii (analiză, sinteză, comparație, generalizare, clasificare); dezvoltarea imaginației și a abilităților artistice; dezvoltarea vorbirii (abilitatea de a exprima gândurile, formularea raționamentelor simple); dezvoltarea memoriei și a atenției; dezvoltarea capacității de stabilire a contactului cu semenii și cu adulții.</p>
      </div>
      <div>
        <img src={foto} alt="" className="scoala"></img>
      </div>
    </div>
  )
}
export default Pregatire
