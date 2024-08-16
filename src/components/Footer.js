import "../css/footer.css"
import logo from "../img/logo2.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import mercedes from '../img/mercedes.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PlaceIcon from '@mui/icons-material/Place';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme } from "@emotion/react";

function Footer(props) {
  const [AmpladaRalla, setAmpladaRalla] = useState(0)
  const [OpacitatRalla, setOpacitatRalla] = useState(0)
  const [alçadafooter, setAlçadafooter] = useState("500px")
  const [alçadafooter2, setAlçadafooter2] = useState("400px")


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
    useEffect(() => {
      if (scrollPosition > 2700) {
          setAmpladaRalla('80%');
          setOpacitatRalla(1);
          console.log(scrollPosition)
      }
    }, [scrollPosition]);

    const Item = styled(Paper)(({ theme }) => ({

    }));


  return (  
    <div className="mainfooter" >
      <div className="topside">
      <Grid container spacing={2} style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Grid item xs={8} md={2} xl={2} sx={{ height: { md: '400px',xl: '400px'}}}  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Item  style={{ backgroundColor:"transparent", boxShadow:"none"}}>
              <div className="leftdiv2">
                <img src={logo} style={{maxWidth:"100%"}}></img>
              </div>
              </Item>
          </Grid>
          <div className="ralla2"></div>

          <Grid item xs={8} md={2} xl={2}>
              <Item style={{ backgroundColor:"transparent", boxShadow:"none"}}>
            <div className="divfooter" >
              <div className="titolsfooter" >
                  ADREÇA
              </div>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <PlaceIcon></PlaceIcon>
                <span className="espaiat2">C/ Llobregat, 19 (Poligon Industrial La Plana), Aviá 08610</span>
              </div>
              <div className="titolsfooter" style={{marginTop:"50px"}}>
                  HORARI
              </div>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <AccessAlarmIcon></AccessAlarmIcon>
                <span className="espaiat2">Dill a Div: 8:00-13:00 <br></br>i 15:00-18:00</span>
              </div>

            </div>
              </Item>
          </Grid>
          <div className="ralla2"></div>

          <Grid item xs={8} md={2} xl={2}>
              <Item style={{ backgroundColor:"transparent", boxShadow:"none"}}>
                <div className="divfooter">
                  <div className="titolsfooter">
                      CONTACTE'NS
                  </div>
                  <div style={{display:"flex", flexDirection:"column"}} className="spans">
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                      <EmailIcon></EmailIcon>
                      <span className="espaiat2">xavigil@laplanxisteria.cat</span>
                    </div>

                    <div style={{marginTop:"20px"}}>
                      <LocalPhoneIcon></LocalPhoneIcon>
                      <span className="espaiat2">+34 699209301</span>
                    </div>
                  </div>
                </div>
              </Item>
          </Grid>
          <div className="ralla2"></div>

          <Grid item xs={8} md={2} xl={2}>
              <Item style={{ backgroundColor:"transparent", boxShadow:"none"}}>
                <div className="divfooter2" > 
                  <div className="titolsfooter">
                      XARXES SOCIALS
                    </div>

                      <div className="divicons">
                          <a target=" " href="https://www.instagram.com/laplanxisteria/"><InstagramIcon className="icons"></InstagramIcon></a>
                          <a target=" " href="https://www.instagram.com/laplanxisteria/"><FacebookIcon className="icons"></FacebookIcon></a>
                          <a target=" " href="https://es.linkedin.com/company/la-planxisteria"><LinkedInIcon className="icons"></LinkedInIcon></a>
                          <a target=" " href="https://www.youtube.com/channel/UC2Yu0Nz9wsI4-7vJ0xm7uIQ"><YouTubeIcon className="icons"></YouTubeIcon></a>                  
                      </div>
                  </div>
              </Item>
          </Grid>
      </Grid>
      </div>
      <div className="ralla" style={{width:AmpladaRalla, transition: "all 2s ease-in-out"}}></div>
      <div className="botside" style={{opacity:OpacitatRalla, transition: "all 2.5s ease-in-out"}}>
          Abel Torrabadella Vila
      </div>
    </div>
  );
}
export default Footer;