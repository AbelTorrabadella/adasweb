import { useEffect, useState } from 'react';
import '../css/menu.css';

import logo from "../img/logo.png"
import { useNavigate } from 'react-router-dom';



function Menu(props) {
  const [colorMenu, setColorMenu] = useState("transparent")
  const [colorLletres, setColorLletres] = useState("black")
  const [alturaMenu, setAlturaMenu] = useState("21%")
  const [ampladaLogo, setAmpladaLogo] = useState("50%")
  const navigate = useNavigate();

  const [ralla, setRalla] = useState("0%")
  const [ralla1, setRalla1] = useState("0%")
  const [ralla2, setRalla2] = useState("0%")
  const [ralla3, setRalla3] = useState("0%")
  const [ralla4, setRalla4] = useState("0%")

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.scrollTo(0,0);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0 && colorMenu == 'transparent') {
      setColorMenu('#fff');
      setColorLletres("black")
      setAlturaMenu("12%")
      setAmpladaLogo("30%")
    }
    else if (scrollPosition == 0 && colorMenu == '#fff') {
      setColorMenu('transparent');
      setColorLletres("black")
      setAlturaMenu("21%")
      setAmpladaLogo("50%")

    }
  }, [scrollPosition]);


  return (
    <div className="menu" style={{display: (props.isPortada ? "flex" : 'flex'), backgroundColor:(props.isPortada ? colorMenu : 'white'), color:(props.isPortada ? colorLletres : 'black'), height: (props.isPortada ? alturaMenu : "12%")}}>
      <div className='displayflex' style={{width:"100%"}}>
        <div className='div-left'>
          <div className='logodiv' onClick={() => {navigate('')}}>
            <img src={logo} className='logoimg' width={(props.isPortada ? ampladaLogo : "30%")}></img>

          </div>
        </div>

        <div className='div-right'>
            <div className='encapsulament'>
              <div className="bottomborder" onClick={() => {navigate('treball')}} onMouseEnter={() => {setRalla(("100%"))}} onMouseLeave={()=> {setRalla(("0%"))}}>
                COM TREBALLEM</div>
              <div className="ralla"  style={{width:ralla, height:"2px", backgroundColor:colorLletres, transition:"all 0.4s ease-in-out"}}></div>
            </div>

            <div className='encapsulament' onMouseEnter={() => {setRalla1(("100%"))}} onMouseLeave={()=> {setRalla1(("0%"))}}>
              <div className="bottomborder" onClick={() => {navigate('tipus')}}>TIPUS D'ADAS</div>
              <div className="ralla" style={{width:ralla1, height:"2px", backgroundColor:colorLletres, transition:"all 0.4s ease-in-out"}}></div>
            </div>
            
            <div className='encapsulament' onClick={() => {navigate('faqs')}} onMouseEnter={() => {setRalla2(("100%"))}} onMouseLeave={()=> {setRalla2(("0%"))}}>
              <div className="bottomborder">FAQs</div>
              <div className="ralla" style={{width:ralla2, height:"2px", backgroundColor:colorLletres, transition:"all 0.4s ease-in-out"}}></div>
            </div>

            <div className='encapsulament' onClick={() => {navigate('localitzacio')}} onMouseEnter={() => {setRalla3(("100%"))}} onMouseLeave={()=> {setRalla3(("0%"))}}>
              <div className="bottomborder">LOCALITZACIÓ</div>
              <div className="ralla" style={{width:ralla3, height:"2px", backgroundColor:colorLletres, transition:"all 0.4s ease-in-out"}}></div>
            </div>

            <div className='encapsulament' onClick={() => {navigate('contacte')}} onMouseEnter={() => {setRalla4(("100%"))}} onMouseLeave={()=> {setRalla4(("0%"))}}>
              <div className="bottomborder">CONTACTE</div>
              <div className="ralla" style={{width:ralla4, height:"2px", backgroundColor:colorLletres, transition:"all 0.4s ease-in-out"}}></div>
            </div>


        </div>
      </div>  

    </div>
)
}

export default Menu;
