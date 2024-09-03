import "../css/contacte.css"
import { useForm } from 'react-hook-form';
import  { useRef } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PlaceIcon from '@mui/icons-material/Place';
import emailjs from '@emailjs/browser';
import { CheckBox } from "@mui/icons-material";

function Contacte(props) {
  const form = useRef();
  const [mobil, setMobil] = useState(false)
  const [opacitatenviat, setOpacitatenviat] = useState("0")
  const Item = styled(Paper)(({ theme }) => ({

  }));
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [enviat, setEnviat] = useState(false);

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
      setMobil(true)
    }
    else {
      setMobil(false)
    }
  } )


  //FORMULARI:
  
  const {
    register,
    handleSubmit, //FORMULARI DE CONTACTE
    setValue,
    formState: { errors },
  } = useForm();

  const enviarmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gqal8ji', 'template_690rfh8', form.current, {
        publicKey: '3dkM_UN6L43ySjOUC',
      })
  };

  function IsEmpty() {
    const consultaField = form.current.querySelector('[name="consulta"]'); //Aixo es per si els camps no estan plens del formulari
  
    if (consultaField.value) {
      setEnviat(true);
      setOpacitatenviat("1");    
    } 
  }
  return (
    <div className="maincontacte">
      <div className="mapa" style={{display: (mobil ? "none" : "block")}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12799.66134173008!2d1.8798719089942884!3d42.0491690700205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5071054045d19%3A0x67f62feaf4edcd2d!2sLa%20Planxisteria!5e0!3m2!1sca!2ses!4v1724400984654!5m2!1sca!2ses" 
        allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
        <div className='contacte' style={{display: enviat ? "none" : "flex", alignItems:"center", justifyContent:"center"}} >
            <form ref={form} onSubmit={enviarmail}  className='formulari2'
            style={{position: (mobil ? "relative" : "absolute"), top: (mobil ? "30px" : "0px"), right: (mobil ? "0" : "150px"), width: (mobil ? "100%" : "30%"), padding:"20px"}}>
                <h1>CONTACTE</h1>
                <div className='div_contacte1'>
                    <input className='inputafegir' style={{marginTop:"5%"}} name="nom" placeholder='Nom i cognoms *' required/>
                    <input className='inputafegir' name="email"  placeholder='Email *' required/>
                    <input className='inputafegir' name="tel"  placeholder='Telèfon *' type='string' required/>
                    <input className='inputafegir' name="empresa"  placeholder='Empresa' type='srting'/>
                    <input className='inputafegir' name="consulta"  placeholder='Consulta *' type='string' required/>
                    <p style={{fontSize:"18px", color:"black", marginTop:"10%"}}><input type="checkbox" id="scales" name="scales" required />Accepto la <a target=" " href="/politica">politica de privacitat</a></p>
                </div>
                <div className='divajuntador'>
                    <input type="submit" className='enviarcontacte' value="Enviar"  onClick={() => {IsEmpty()}}></input>
                </div>
            </form>
        </div>
        <div className="enviatok" style={{display: enviat ? "flex" : "none",
          position: (mobil ? "relative" : "absolute"), top: (mobil ? "30px" : "0px"), 
          right: (mobil ? "0" : "100px"), width: (mobil ? "100%" : "30%"), padding:"20px"}}>
          <span style={{ opacity: opacitatenviat}}>LA CONSULTA S'HA ENVIAT CORRECTAMENT!</span>
          <span style={{ opacity: opacitatenviat}}>MOTLES GRÀCIES!</span>
        </div>
        <div className="varis">
            <Grid className="grid3" container spacing={2}>
              <Grid item xs={12} md={2} xl={2}>
                  <Item style={{boxShadow:"none"}}>
                    <div className="encap1">
                      <LocalPhoneIcon style={{height:"60px", width:"60px"}}></LocalPhoneIcon>
                      <div className="encap">TELÈFON</div>
                        <div className="align">
                          <span>+34 699209301</span>
                      </div>
                    </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={2} xl={2}>
                  <Item style={{boxShadow:"none"}}>
                    <div className="encap1">
                      <EmailIcon style={{height:"60px", width:"60px"}}></EmailIcon>
                      <div className="encap">CORREU</div>
                      <div className="align">
                        <span>adas@laplanxiteria.cat</span>
                      </div>
                    </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={2} xl={2}>
                  <Item style={{boxShadow:"none"}}>
                  <div className="encap1">
                    <PlaceIcon style={{height:"60px", width:"60px"}}></PlaceIcon>
                    <div className="encap">ADREÇA</div>
                    <div className="align">
                      <span>C/ Llobregat, 19 (Poligon Industrial La Plana), Aviá 08610</span>
                    </div>
                  </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={2} xl={2}>
                  <Item style={{boxShadow:"none"}}>
                  <div className="encap1">
                    <AccessAlarmIcon style={{height:"60px", width:"60px"}}></AccessAlarmIcon>
                    <div className="encap">HORARI</div>
                    <div className="align">
                      <span>Dill a Div: 8:00-13:00 i 15:00-18:00</span>
                    </div>
                  </div>
                  </Item>
              </Grid>
            </Grid>
        </div>
    </div>
  );
}
export default Contacte;