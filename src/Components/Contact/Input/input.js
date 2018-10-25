import React from 'react'
import './input.css'

function Input(props)
{
  return(
    <div>
      <h2 className="input-title">Informati de Contact</h2>

      <form className="input-div">      
       <input type="text" placeholder="Nume" className="input"/>
       <input type="text" placeholder="Email" className="input"/>
       <input type="text" placeholder="Telefon" className="input"/>
       <textarea rows="5" placeholder="Mesaj" className="text"></textarea>
       <input type="submit" className="button"></input>
      </form>
    </div>
  )
}

export default Input
