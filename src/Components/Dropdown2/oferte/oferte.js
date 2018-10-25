import React,{Component} from 'react'
import './oferte.css'
import voinicel from '../../foto/voinicel.jpg'

class Oferte extends Component{
    render(){
        return(
           <div className="oferteblock">
               <div className='div-oferte'>

                   <p>Academia Piticilor își deschide ușile la ora 8.00, iar copiii rămân în această mare familie până la 18.00.Aici, copiii au parte de o varietate de activități mega-interesante. Înviorarea de dimineață, după care urmează micul dejun. Apoi, cu forțe noi, toți copiii se aventurează în lumea cunoștințelor, care la "Academia Piticilor" are loc prin prisma unor activități interesante. Micuții modelează din plastilină sau nisip, colorează, conturează și desenează. Învață poezii, fac diferite aplicații din hârtie colorată/creponată, și au parte zilnic de o mulțime de jocuri pentru dezvoltarea intelectuală.</p>
                   <p>În afară de micul dejun, copiii mai au parte de încă o masă și o gustare după somnul de la amiază. Apropo, pe lângă meniul de bază, aceștia sunt hrăniți zilnic cu fructe și legume proaspete.</p>
                   <p>După somnul de la amiază și gustare, copiii au parte de alte ore de distracție și educație prin joacă. Academia Piticilor are camere separate pentru diferite vârste de copii, săli de mese, iar curtea este spațioasă, dotată cu teren de joacă în aer liber, dar și multe alte surprize.</p>
                </div>
                <div className="">
                    <img src={voinicel} alt="" className="img10"></img>
                </div>
            </div>
        );
    }
}
export default Oferte
