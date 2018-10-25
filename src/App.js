import React, { Component } from 'react';
import './App.css';
import foto5 from './Components/foto/foto3.jpg'
import Oferte from './Components/Dropdown2/oferte/oferte.js'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Components/navbar/Navbar.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faMap } from '@fortawesome/free-solid-svg-icons'
import Gallary from './Components/galary/galary.js'
import Flex from './Components/flex/flex.js'
import Section from './Components/section/section.js'
import Footer from './Components/footer/footer.js'
import Background from './Components/background/background.js'
import Dropdown from './Components/navbar/dropdownmenu.js'
import Backdrop from './Components/navbar/backdrop.js'
import Nutritie from './Components/Nutritie/nutritie.js'
import Icons from './Components/Contact/icons/icons.js'
import Input from './Components/Contact/Input/input.js'
import Grupe from './Components/Dropdown1/Grupe/grupe.js'
import Pregatire from './Components/Dropdown2/pregatire/pregatire.js'
import Dadaca from './Components/Dropdown2/dadaca/dadaca.js'

library.add(faPhone,faMap)

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      count: 0,
      value: false,
      dropOpen: false,
      drop1Open: [false,false],
      show: false
    }
    this.backdropClose=this.backdropClose.bind(this)
    this.drop=this.drop.bind(this)
    this.toglebuttonclickhandler=this.toglebuttonclickhandler.bind(this)
    this.showimg=this.showimg.bind(this)
  }

  showimg(){
    this.setState({
      show: true
    })
  }
  open(){
   this.setState({
     value: !this.state.value
   })
  }
  toglebuttonclickhandler=()=>{
    this.setState((prevState)=>{
       return {dropOpen: !prevState.dropOpen}
    })
  }
  backdropClose=()=>{
    this.setState({
      dropOpen:false,
      drop1Open: this.state.drop1Open.map(item=>{return false})
    })
  }
  drop=(a)=>{

    this.setState((prevState)=>{
      return {drop1Open: prevState.drop1Open.map((item,index)=>{
        if(index===a)
           return !item;
        else
          return item;
      })}
    })
  }


  render(){

    let backdrop;
    if(this.state.dropOpen)
    {
      backdrop=<Backdrop backdropClick={this.backdropClose}/>
    }
    let a={
      backgroundImage: `url(${foto5})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
    return (

        <BrowserRouter>
          <div>
          {backdrop}

          <Dropdown open1={this.state.dropOpen} gradinita={this.drop} render={this.state.drop1Open} close={this.backdropClose}/>
          <div style={a}>
          <Navbar clickhandle={this.toglebuttonclickhandler} />
          <Route path="/" component={Flex} exact/>
          <Route path="/" component={Gallary} exact/>
          <Route path="/" component={Footer} exact/>
          </div>
          <Route path="/Gradinita" component={(props)=><Background {...props} name="Gradinita"/>}/>

          <Route path="/Nutritie" component={(props)=><Background {...props} name="Nutritie"/>}/>
          <Route path="/Contact" component={(props)=><Background {...props} name="Contact"/>}/>
          <Route path="/Tarife" component={(props)=><Background {...props} name="Tarife"/>}/>
          <Route path="/Grupe" component={(props)=><Background {...props} name="Componenta Grupelor"/>}/>
          <Route path="/pregatirepentruscoala" component={(props)=><Background {...props} name="Pregatire pentru Scoala"/>}/>
          <Route path="/dadaca" component={(props)=><Background {...props} name="Dadaca pentru o Ora"/>}/>
          <Route path="/dadaca" component={Dadaca}/>
          <Route path="/pregatirepentruscoala" component={Pregatire}/>
          <Route path="/Grupe" component={Grupe}/>
          <Route path="/Gradinita" component={Oferte}/>
          <Route path="/Nutritie" component={Nutritie}/>
          <Route path="/Contact" component={Icons}/>
          <Route path="/Contact" component={Input}/>
          <Route path="/Gradinita" component={Section}/>
          <Route path="/pregatirepentruscoala" component={Section}/>
          <Route path="/Nutritie" component={Section}/>
          <Route path="/dadaca" component={Section}/>
          <Route path="/Contact" component={Section}/>
          <Route path="/Tarife" component={Section}/>
          <Route path="/Grupe" component={Section}/>

          <Route path="/Gradinita" component={Footer}/>
          <Route path="/pregatirepentruscoala" component={Footer}/>
          <Route path="/Nutritie" component={Footer}/>
          <Route path="/dadaca" component={Footer}/>
          <Route path="/Contact" component={Footer}/>
          <Route path="/Tarife" component={Footer}/>
          <Route path="/Grupe" component={Footer}/>

          </div>
        </BrowserRouter>

    )
  }
}


export default App;
