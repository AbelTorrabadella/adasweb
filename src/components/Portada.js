import "../css/portada.css"
import { useState, useEffect } from "react"
import Slider from "./Slider";
import Content from "./Content";
import foto1 from "../img/foto1.png"
import foto2 from "../img/foto2.jpg"
import foto3 from "../img/foto3.png"
import video from "../img/video3.mp4"
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
  const [mobil2, setMobil2] = useState(true)

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
    if (windowSize < 1024){ //PANTALLA MOBIL
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
        <video src={video} loop autoPlay={mobil2 ? false : true } muted className="video" style={{display: mobil2 ? "none" : "block"}}></video>
      </div>
      <div className="textportada" style={{left:dreta, opacity:opacitat}}>
        <span className="spantext" style={{display:"none"}}>CALIBREM SISTEMES ADAS</span>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", top:"370px", position:"relative"}}>
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