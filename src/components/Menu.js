import { useEffect, useState } from 'react';
import '../css/menu.css';

import logo from "../img/logo.png"
import { useNavigate } from 'react-router-dom';


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from "@emotion/react";
import MenuIcon from '@mui/icons-material/Menu';
import Menu2 from "./Menu2";
import CloseIcon from '@mui/icons-material/Close';


import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PlaceIcon from '@mui/icons-material/Place';

function Menu(props) {

  const [colorMenu, setColorMenu] = useState("transparent")
  const [colorLletres, setColorLletres] = useState("black")
  const [alturaMenu, setAlturaMenu] = useState("21%")
  const [ampladaLogo, setAmpladaLogo] = useState("60%")
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [verdader, setVerdader] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [ralla, setRalla] = useState("18px")
  const [ralla1, setRalla1] = useState("18px")
  const [ralla2, setRalla2] = useState("18px")
  const [ralla3, setRalla3] = useState("18px")
  const [ralla4, setRalla4] = useState("18px")
  const [ampladamenu, setAmpladamenu] = useState(false)
  const [opacitatCreu, setOpacitatcreu] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [formatpetit, setFormatPetit] = useState(false)
  const [dalt, setDalt] = useState(false)
  const [canvis, setCanvis] = useState("70px")

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
    }
    else if (scrollPosition == 0 && colorMenu == '#fff') {
      setColorMenu('transparent');
      setColorLletres("black")
    }


  }, [scrollPosition]);

  const Item = styled(Paper)(({ theme }) => ({

  }));

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
    console.log(clicked)
  }, [windowSize]);

  useEffect(() => {
    if (windowSize < 1025){
      setVerdader(true)
      setAlturaMenu("55%")
      setFormatPetit(true)

    }
    else if (windowSize > 1025){
      setVerdader(false)
      setClicked(false)
    }
    else if (clicked === true){
      setVerdader(false)
      setAmpladamenu(true)
      setOpacitatcreu(1)
    }
  })

  useEffect(() => {
    if (clicked === true) {  //SI HE OBERT EL MENU EN UN MOBIL (ES IGUAL A ON)
      setAlturaMenu("60%")

    }
    else{  //SI NO HE OBERT EL MENU EN UN MOBIL
      setAlturaMenu("18%")
    }
  })

  useEffect(() => {

    if ((props.isPortada === true && scrollPosition === 0 )&& windowSize > 1025  ) { //Si es la portada i no he fet scroll en pc
      setAlturaMenu("21%")
      setAmpladaLogo("60%")
    }
    if ((props.isPortada === false || scrollPosition > 0) && windowSize > 1025 ) { //si no es portada o he fet scroll en pc
      setAlturaMenu("15%")
      setAmpladaLogo("40%")
    }
  })

  useEffect(() => { //PER TREURE EL PETIT MENU I QUE PUJI EL MENU AMUNT EN CAS DE SER MOBIL
    if (verdader === true || scrollPosition != 0){ // verdader vol dir que es mida mobil.
        setCanvis("0px")

    }
    else {
        setCanvis("70px")
    }
  })

  useEffect(() => { //SI BAIXO QUE NO SURTI
    if (scrollPosition != 0){
      setDalt(true)
  
    }
    else if (scrollPosition === 0){
      setDalt(false)
    }  
  })

  return (
    <div className="menu1" >
        <div className="topdeltot" style={{opacity: dalt ? "0" : "1", display: verdader ? "none" : "flex", transition:"all 2s ease-in-out",}}>
          <div className="top">
            <AccessAlarmIcon></AccessAlarmIcon>
            <div style={{marginLeft:"20px"}}>Dill a Div: 8:00-13:00 i 15:00-18:00</div>
          </div>
          <div className="top">
            <LocalPhoneIcon></LocalPhoneIcon>
            <div style={{marginLeft:"20px"}}>+34 699209301</div>
          </div>
          <div className="top">
            <PlaceIcon></PlaceIcon>
            <div style={{marginLeft:"20px"}}>C/ Llobregat, 19 (Polígon Industrial La Plana), Avià 08610</div>
          </div>
          <div className="top">
            <EmailIcon></EmailIcon>
            <div style={{marginLeft:"20px"}}>adas@laplanxisteria.cat</div>
          </div>
        </div>
        <div className="menu" style={{ display: (props.isPortada ? "flex" : 'flex'),top: (dalt ? "0px" : canvis), backgroundColor:(props.isPortada ? colorMenu : 'white'), color:(props.isPortada ? colorLletres : 'black'), height: (alturaMenu)}}>
          <div className='div-left' style={{width: (formatpetit ? "40%" : "20%")}}>
            <div className='logodiv' onClick={() => {navigate('')}}>
              <img src={logo} className='logoimg' style={{width: "100%",height: "100%",objectFit:"contain",cursor:"pointer", maxHeight:"100%"}}></img>
            </div>
          </div>  

          <div style={{ display: (verdader && !clicked) ? "block" : "none", width:"30%", height:"100%"}} onClick={() => setClicked(true)}>
            <MenuIcon style={{width:"20%", height:"100%", cursor:"pointer"}}></MenuIcon>
          </div>
          <div style={{display: clicked ? "flex":"none", alignItems:"center", justifyContent:"center"}}>
            <CloseIcon style={{
              display:"flex",
              zIndex:"12",
              position:"absolute",
              top:"5px",
              left:"0",
              right:"0",
              margin:"auto",
              transition:"all 1s ease-in-out",
              opacity:{opacitatCreu},
              cursor:"pointer"
              
              }} 
              onClick={() => setClicked(false)} />
            <Menu2 clicked={clicked} setClicked={setClicked}></Menu2>
          </div>
          <div className='div-right' style={{display: verdader ? "none" : ""}}>
          <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
              <Grid item xs={12} md={2} xl={2} sx={{ setPetit: {xs:true, md:false }}} style={{transition:"all 0.25s ease-in-out", fontSize:ralla}}  className='gridgrid' onMouseEnter={() => {setRalla(("20px"))}} onMouseLeave={()=> {setRalla(("18px"))}}>
                  <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}} className='itemgrid'>
                  <div className='encapsulament'>
                    <div className="bottomborder" onClick={() => {navigate('treball'); window.scrollTo(0, 0);}}>
                      QUI SOM</div>
                  </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={2} xl={2} sx={{ setPetit: {xs:true, md:false }}} style={{transition:"all 0.25s ease-in-out", fontSize:ralla2}}  className='gridgrid' onMouseEnter={() => {setRalla2(("20px"))}} onMouseLeave={()=> {setRalla2(("18px"))}}>
                  <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}} className='itemgrid'>
                  <div className='encapsulament'>
                    <div className="bottomborder" onClick={() => {navigate('com'); window.scrollTo(0, 0);}}>
                      COM HO FEM</div>
                  </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={2} xl={2} style={{transition:"all 0.25s ease-in-out", fontSize:ralla1}} className='gridgrid' onMouseEnter={() => {setRalla1(("20px"))}} onMouseLeave={()=> {setRalla1(("18px"))}}>
                  <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                  <div className='encapsulament'>
                    <div className="bottomborder" onClick={() => {navigate('tipus');window.scrollTo(0, 0);}}>TIPUS D'ADAS</div>
                  </div>
              
                  </Item>
              </Grid>
              <Grid item xs={12} md={2} xl={2} style={{transition:"all 0.25s ease-in-out", fontSize:ralla3}} className='gridgrid' onMouseEnter={() => {setRalla3(("20px"))}} onMouseLeave={()=> {setRalla3(("18px"))}}>
                  <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                  <div className='encapsulament'>
                    <div className="bottomborder" onClick={() => {navigate('preguntes'); window.scrollTo(0, 0);}}>FAQs</div>
                  </div>
                  </Item>
              </Grid>
              {/*<Grid item xs={12} md={2} xl={2}>
                  <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                  <div className='encapsulament' onClick={() => {navigate('localitzacio')}} onMouseEnter={() => {setRalla3(("100%"))}} onMouseLeave={()=> {setRalla3(("0%"))}}>
                    <div className="bottomborder">GALERIA?</div>
                    <div className="ralla" style={{width:ralla3, height:"2px", backgroundColor:colorLletres, transition:"all 0.4s ease-in-out"}}></div>
                  </div>
                  </Item>
              </Grid>*/}
              <Grid item xs={12} md={2} xl={2} style={{transition:"all 0.25s ease-in-out", fontSize:ralla4}} className='gridgrid' onMouseEnter={() => {setRalla4(("20px"))}} onMouseLeave={()=> {setRalla4(("18px"))}}>
                  <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                  <div className='encapsulament' onClick={() => {navigate('contacte');window.scrollTo(0, 0);}}>
                    <div className="bottomborder">CONTACTE</div>
                  </div>
                  </Item>
              </Grid>
            </Grid>
          </div>
        </div>

    </div>
  )
}

export default Menu;
