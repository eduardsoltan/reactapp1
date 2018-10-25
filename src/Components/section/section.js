import React from 'react'
import foto from '../foto/back.jpg'
import './section.css'

function Section(){
    const a={
        backgroundImage: `url(${foto})`
    }
    return (

        <div className="section" style={a}>
            <h2>Ce spun Parintii:</h2>
            <div className="flex1">
                <div className="flex2"> 
                  <p>"Am fost deosebit de multumiti de Academia Piticilor cu care colaboram de sapte ani. Amandoi copiii nostri au mers cu drag de la trei ani si pana acum cand sunt in Programul Kreative Erziehung pentru scolari; au crescut frumos aici si am atins scopul dorit de noi - invatarea limbii germane. Recomand Academia Piticilor tuturor."</p>
                  <div className="h">
                   <h3>Olivia Tudor</h3>
                   <p>Mama Dominicai si a lui Damian</p>
                  </div>
                </div>
                <div className="flex2">
                <p>"Academia Piticilor a reprezentat pentru David, baietelul nostru, o a doua familie. Aici, datorita mediului de lucru, programei si a educatoarelor (cadrele didactice) si-a imbunatatit cunostintele, s-a dezvoltat si a reusit performanta sa invete sa vorbeasca limba germana ca pe limba sa nativa." </p>
                <div className="h">
                   <h3>Monica Resmerita</h3>
                   <p>Mama lui David</p>
                  </div>
                </div>
                <div className="flex2">
                <p>"In urma cu 7 ani, am venit cu multa incredere la Academia Piticolor, cu primul meu copil. Dupa 3 ani am adus si cel de-al 2-lea copil, si in ziua de astazi suntem tot aici (in Programul KE pentru scolari)si ne dorim sa ramanem in continuare atat cat va fi posibil..." </p>
                <div className="h">
                   <h3>Laura Mocanu</h3>
                   <p>Mama lui Edith(6 ani) si Sacha(9 ani)</p>
                  </div>
                  </div>
            </div>
        </div>
    )
}
export default Section