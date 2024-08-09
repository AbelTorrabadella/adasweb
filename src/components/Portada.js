import "../css/portada.css"
import { useState, useEffect } from "react"
import Slider from "./Slider";
import Content from "./Content";
import foto1 from "../img/foto1.png"
import foto2 from "../img/foto2.jpg"
import foto3 from "../img/foto3.png"
import video1 from "../img/video.mp4"
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


  return (
    <div>
      <div className="slider">
      <video loop autoPlay muted style={{width:"100%"}}>       
        <source src={require('../img/video2.mp4')} type="video/mp4" />
      </video>
      </div>
      <div className="textportada" style={{left:dreta, opacity:opacitat}}>
        <span className="spantext">CALIBREM SISTEMES ADAS</span>
        <span className="textpetit">
            A la Planxisteria oferim serveis de planxa i pintura, així com la calibració de sistemes ADAS per garantir la seguretat i eficiència del teu vehicle.
        </span>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div className="hora" onClick={() => {navigate('contacte')}}>DEMANA HORA</div>
      </div>
      </div>
      <div className="content">
          <Content/>
      </div>
    </div>
  );
}
export default Portada;