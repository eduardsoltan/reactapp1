import React,{Component} from 'react'
import './footer.css'
import AwesomeSocial from 'react-awesome-social'
import 'react-awesome-button/dist/styles.css'

class Footer extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            hidden: false
        }
    }
    render()
    {
        return (
         <div>
             <div className="footer">
                 <div>
                    <h4 className="title">Academia Piticilor</h4>
                    <p className="stred">Ciocana, bulevardul Mircea cel Bătrân, 33</p>
                 </div>
                 <div>
                 <AwesomeSocial type="facebook" iconHeight="40" iconWidth="40">Facebook</AwesomeSocial>
                 </div>
             </div>
         </div>
        )
    }
}

export default Footer
