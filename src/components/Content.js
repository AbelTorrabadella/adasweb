import { useEffect, useState } from 'react';
import '../css/content.css';
import Slider2 from './Slider2';
import foto1 from "../img/foto1.png"
import foto2 from "../img/foto2.jpg"
import foto3 from "../img/foto3.png"
import durabilitat from "../img/durabilitat.png"
import seguretat from "../img/escut.png"
import fiabilitat from "../img/fiabilitat.png"
import normes from "../img/normas.png"
import mercedes from "../img/mercedes.jpg"
import golf from "../img/golf.jpeg"
import golf2 from "../img/golf2.jpeg"


function Content(props) {
    const slides = [
        {foto: foto1},
        {foto: foto2},
        {foto: foto3},

      ]
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.scrollTo(0,0);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const [opacitat, setOpacitat] = useState("0")
    const [opacitat1, setOpacitat1] = useState("0")
    const [opacitat2, setOpacitat2] = useState("0")

    useEffect(() => {
        if (scrollPosition > 500) {
            setOpacitat('1');
            setOpacitat2('1');

        }
        if (scrollPosition > 950) {
            setOpacitat1('1');
        }

      }, [scrollPosition]);

    return (
    <div className="content">
        <div className='adas'>
            <div className='primer'  style={{opacity:opacitat, transition:"all 0.5s ease-in-out"}}>
                <div className='titols' style={{justifyContent:"center"}}>QUÈ SON ELS SISTEMES ADAS?</div>
                <span className='textinferior'>
                    Els sistemes d'Assistència Avançada al Conductor (ADAS) milloren la seguretat i l'eficiència dels vehicles. <br></br>Inclouen funcions com el control de creuer adaptatiu i l'assistència de manteniment de carril, que redueixen el risc d'accidents i proporcionen una conducció més còmoda i confiable.
                </span>
            </div>

            <div className='primer'  style={{opacity:opacitat2, transition:"all 1s ease-in-out"}}>
                <div className='titols' style={{justifyContent:"center"}}>QUAN CAL CALIBRAR ELS SISTEMES ADAS?</div>
                <span className='textinferior' style={{textAlign:"justify"}}>
                    <ul style={{fontWeight:'bold'}} className='llista'>
                        <li>Després de Reemplaçar el Parabrisa</li>
                        <li>Després de Reparacions a la Suspensió o Direcció</li>
                        <li>Després d'un Accident</li>
                        <li>Després de Reemplaçar o Reparar els Para-xocs</li>
                        <li>Quan Apareixen Advertències al Panell de Control</li>
                        <li>Revisió Periòdica</li>

                    </ul>
                </span>
            </div>

        </div> 
        <div className='primerdiv'>
            <div className='leftside'>
                <div className='titols' style={{display:"flex", justifyContent:"center", opacity:opacitat1, transition:"all 0.5s ease-in-out"}}>PERQUE CAL CALIBRAR ELS SENSORS I RADARS DEL TEU COTXE?</div>
                <div style={{display:"flex"}} className='quadrats'>
                    <div className='primerquadrat' style={{opacity:opacitat1, transition:"all 0.5s ease-in-out"}}>
                        <div className='divicona'><img className='icona' src={seguretat}></img></div>
                        <div className='titol'>SEGURETAT</div>
                        <div className='subtext'>
                            Els sistemes ADAS milloren la seguretat activa del vehicle evitant accidents amb funcions com el manteniment de carril i la frenada automàtica. Una mala calibració pot causar respostes inadequades en situacions de risc.                        </div>
                    </div>
                    <div className='primerquadrat' style={{opacity:opacitat1, transition:"all 0.5s ease-in-out"}}>
                        <div className='divicona'><img className='icona' src={fiabilitat}></img></div>
                        <div className='titol'>FIABILITAT</div>
                        <div className='subtext'>
                            La precisió dels sensors i radars és essencial per detectar obstacles i vehicles amb exactitud, evitant falses alarmes i garantint una resposta adequada en temps real.
                        </div>
                    </div>
                    <div className='primerquadrat' style={{opacity:opacitat1, transition:"all 0.5s ease-in-out"}}>
                        <div className='divicona'><img className='icona' src={normes}></img></div>
                        <div className='titol'>COMPLIMENT DE NORMES</div>
                        <div className='subtext'>
                            Les normatives de seguretat viària exigeixen que els sistemes ADAS funcionin correctament. Sensors descalibrats poden implicar sancions i responsabilitats legals en cas d'accident.
                        </div>
                    </div>
                    <div className='primerquadrat' style={{opacity:opacitat1, transition:"all 0.5s ease-in-out"}}>
                        <div className='divicona'><img className='icona' src={durabilitat}></img></div>

                        <div className='titol'>DURABILITAT I EFICIÈNCIA</div>
                        <div className='subtext'>
                            Una bona calibració assegura una major vida útil dels components del vehicle i contribueix a un consum de combustible més eficient gràcies a sistemes com el control de creuer adaptatiu.
                        </div>
                </div>
            </div>
            </div>
        </div>
        <div className='segondiv' style={{marginTop:"3%"}}>
            <img className='fotomercedes' src={golf}></img>
            <div className='titols' 
            style={{
                position:"absolute", 
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"white",
                top:"0",
                bottom:"0",
                left:"0",
                right:"0",
                fontSize:"50px"
            }}
            
            
            >TALLER CERTIFICAT TEXA</div>

        </div>
        <div className='tercerdiv' style={{marginTop:"3%"}}>
            <div className='titols'>MARQUES AMB LES QUE TREBALLEM</div>

        </div>

        <div className='quartdiv' style={{marginTop:"3%"}}>
            <div className='titols'>PER QUÈ TRIAR-NOS?</div>

        </div>
    </div>
)
}

export default Content;
