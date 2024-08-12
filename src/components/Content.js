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
import mercedes from "../img/mercedes.png"
import golf from "../img/golf.jpeg"
import byd from "../img/byd.png"
import Slider from './Slider';
import three from "../img/360.jpg"
import radars from "../img/radars.jpeg";
import carretera from "../img/carretera.jpeg"
import texa from "../img/texa.png"
import sensor from "../img/sensor.png"
import camera from "../img/camera.png"
import radar from "../img/radar.png"
function Content(props) {
    const slides = [
        {foto: foto1},
        {foto: foto2},
        {foto: foto3},

      ]
    const slides2 = [
        {foto: carretera, titol:""},
        {foto: three, titol:""},
        {foto: byd, titol:""},
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
    const [AmpladaRalla3, setAmpladaRalla3] = useState("0")

    useEffect(() => {
        if (scrollPosition > 500) {
            setOpacitat('1');
            setOpacitat2('1');

        }
        if (scrollPosition > 950) {
            setOpacitat1('1');
        }

        if (scrollPosition > 1900) {
            setAmpladaRalla3('80%');
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
            <Slider2 className="slider2" imatges={slides2}></Slider2>
        </div>
        <div className='ralla3' style={{width:AmpladaRalla3}}></div>
        <div className='tercerdiv' style={{ alignItems:"center", display:"flex", flexDirection:"column"}}>
            <div className='titols' style={{width:"80%", marginBottom:"3%"}}>TIPUS DE SISTEMES</div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%"}}>
                <div className='tipus1'>
                    <div className='divnegre'>
                        <img src={camera} className='tipussensors'></img>
                    </div>
                    <div>
                        <div className='titolssensors'>CÀMERAS</div>
                        <div>Les càmeres en els cotxes són utilitzades per capturar imatges visuals del seu entorn. Això inclou altres vehicles, senyals de trànsit, vianants i marques vials.</div>
                    </div>

                </div>

                <div className='tipus1' style={{background:"#1a1a1a"}}>
                    <div className='divnegre' style={{backgroundColor:"white"}}>
                        <img src={sensor} style={{filter:"none"}} className='tipussensors' ></img>
                    </div>
                    <div style={{color:"white"}}>
                        <div className='titolssensors'>SENSORS</div>
                        <div>Els cotxes actuals estan plens de sensors, però si ens referim als </div>
                    </div>


                </div>

                <div className='tipus1'>
                    <div className='divnegre'>
                        <img src={radar} className='tipussensors'></img>
                    </div>
                    <div>
                        <div className='titolssensors'>RADARS I LIDARS</div>
                        <div>Els radars mesuren la distància, velocitat i direcció d'objectes propers utilitzant ones de ràdio.</div>
                        <div>Mentre que el lidar utilitza làsers per crear una imatge 3D de l'entorn, mesurant amb precisió la distància a objectes.</div>
                    </div>

                </div>

            </div>

        </div>
        <div className='ralla3' style={{width:AmpladaRalla3}}></div>

    </div>
)
}

export default Content;
