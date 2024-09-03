import "../css/portada.css"
import { useState, useEffect } from "react"
import Slider from "./Slider";
import Content from "./Content";
import foto1 from "../img/foto1.png"
import foto2 from "../img/foto2.jpg"
import foto3 from "../img/foto3.png"
import video1 from "../img/video.mp4"
import fotomobil from "../img/fotomobil.jpg"
import { useNavigate } from 'react-router-dom';


function Portada() {
  const navigate = useNavigate();
  const slides = [
    {foto: foto1},
    {foto: foto2},
    {foto: foto3},
  ]
  const [path, setPath] = useState(window.location.pathname)
  const [primeravegada, setPrimeravegada] = useState(true)
  const [dreta, setDreta] = useState("-50%")
  const [opacitat, setOpacitat] = useState("0")

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [mobil2, setMobil2] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    console.log({windowSize});
  }, [windowSize]);

  useEffect(()=> {
    if (windowSize < 1000){ //PANTALLA MOBIL
      setMobil2(true)
    }
    else {
      setMobil2(false)
    }
  } )

  useEffect(() => {
    if (primeravegada == true && path == "/") {
      setDreta('0%');
      setOpacitat("1");
    }
    else if (primeravegada != false) {
      setDreta('-50%');
      setOpacitat("0");

    }
  }, [primeravegada]);

  const [ampladaralla, setAmpladaralla] = useState("0%")

  return (
    <div className="error" style={{width:"100%", height:"auto"}}>
      <div className="slider">
        <img style={{display: mobil2 ? "block" : "none"}} src={fotomobil}></img>
        <video loop autoPlay muted playsinline fullscreen={false} resizeMode="contain" controls={false} className="video" style={{display: mobil2 ? "none" : "block"}}>       
          <source src={require('../img/video3.mp4')} type="video/mp4" />
        </video>
      </div>
      <div className="textportada" style={{left:dreta, opacity:opacitat}}>
        <span className="spantext">CALIBREM SISTEMES ADAS</span>
        <span className="textpetit">
          A la Planxisteria realitzem calibracions dels sistemes ADAS per garantir la seguretat i eficiència del teu vehicle, i també oferim serveis de planxa i pintura.
        </span>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", top:"220px", position:"relative"}}>
      <div className='botohora2' onClick={() => {navigate('/contacte');window.scrollTo(0, 0);}}  onMouseEnter={() => {setAmpladaralla("15%")}} onMouseLeave={() => {setAmpladaralla("0%")}}>
              <div className='rallaboto2' style={{
                width:ampladaralla,
        }}></div>
          DEMANA HORA
        </div>        
      </div>
      </div>
      <div className="content">
          <Content/>
      </div>
    </div>
  );
}
export default Portada;