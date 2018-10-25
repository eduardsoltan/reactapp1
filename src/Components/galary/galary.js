import React,{Component} from 'react'
import ImageGallary from 'react-image-gallery'
import './galary.css'
import "react-image-gallery/styles/css/image-gallery.css"
import gal1 from '../foto/cop1.jpg'
import gal2 from '../foto/cop2.jpg'
import gal3 from '../foto/cop3.jpg'



class Gallary extends Component{
    render(){
        const images=[
            {
                original: `${gal1}`,
                thumbnail: `${gal1}`,

            },
            {
                original: `${gal2}`,
                thumbnail: `${gal2}`,

            },
            {
                original: `${gal3}`,
                thumbnail: `${gal3}`,

            }
        ]
        return(
            <div className="galary">
                <div className="galary-text">
                    <h1>Despre Noi</h1>
                    <p><span className="colorspan">ACADEMIA PITICILOR</span> – este o mini-grădiniță cu program de la 9:00 până la 12:30, pentru micuții cu vârstele cuprinse de la 1,5 până la 3 ani, dar și un centru educațional pentru copii creativi, care le oferă servicii de pregătire pentru școală, arta vorbirii și bunele maniere.</p>
                    <p><span className="colorspan">ACADEMIA PITICILOR</span> este un grup de socializare, de joacă și de dezvoltare a abilităților copiilor înainte de a merge la grădiniță sau școală. Copii învață a se integra ușor în grupuri, astfel încât atunci când ajunge la grădiniță îi este foarte ușor să se adapteze, ba chiar mai mult momentul despărțirii de părinți dimineața nu va mai fi o problemă. Instituția pune la dispoziția părinților tot ceea de ce are nevoie copilul dumneavoastră: o atmosferă liniștită și pietenoasă, activități utile și interesante, spațiu vesel și colorat, dar și cadre didactice calificative cu experiență în domeniu și cu o dragoste deosebită față de copii.</p>
                    <p><span className="colorspan">ACADEMIA PITICILOR</span> oferă o serie de oportunități de dezvoltare multilaterală a copiilor, formând un pachet de programe educative, cum ar fi: adaptarea copiilor pentru grădiniță, program de activități interactive, jocuri recreative cu jucării ecologice, activități de dezvoltare a limbajului, activități de arta vorbirii, ore de șah, ore de învățarea a bunelor maniere, dar și pregătirea copiilor pentru școală.</p>
                    <p>Programul de pregătire a copiilor pentru școală, oferă acestora posibilitatea de a deprinde cunoștințele necesare, dar și abilități deosebite pentru a se integra ușor în clasa întâi. Acest program este disponibil pentru copii de la 6 ani, cu începere de la ora 16:30, dar și în week-end.</p>
                </div>
                <ImageGallary items={images} className="galaryimg" autoPlay={true}/>
            </div>
        )
    }
}
export default Gallary
