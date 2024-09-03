import { useEffect, useState } from 'react';
import "../css/treball.css"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import experiencia from "../img/experiencia.png"
import qualitat from "../img/qualitat.png"
import innovacio from "../img/innovacio.png"
import cupra from "../img/CUPRA.jpg"
import mercedes2 from "../img/mercedes2.jpg"

import maquinatexa from "../img/maquinatexa.jpg"

import accident from "../img/accident.jpeg"
import golfverd from "../img/foto2.jpg"
function Treball() {

  const navigate = useNavigate();
  const [opacitat3, setOpacitat3] = useState("1")
  const [opacitat4, setOpacitat4] = useState("1")
  const [esquerra, setEsquerra] = useState("-1000px")
  const [esquerra2, setEsquerra2] = useState("-1000px")

  const [dreta, setDreta] = useState("-1000px")
  const [dreta2, setDreta2] = useState("-1000px")

  const [ampladaralla, setAmpladaralla] = useState("0%")
  const Item = styled(Paper)(({ theme }) => ({

  }));

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
  console.log(scrollPosition)
  if (scrollPosition != 0) {
    setEsquerra('0px');
}
  if (scrollPosition > 400) {
      setOpacitat4('1');
}
if (scrollPosition > 1500){
    setDreta("0px")

}
  if (scrollPosition > 2200){
    setDreta2("0px")

  }

}, [scrollPosition]);

  /*--------------------------------------------------*/
  return (
    <div className="treball" style={{ width:"100%", display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"10%"}}>      
      <div className='perque' style={{ width:"80%"}}>
        <div style={{display:"flex", alignItems:"center", width:"100%"}}>
            <div className='ralla4'></div>
            <div className='titols'>PER QUÈ TRIAR-NOS?</div>
            <div className='ralla5'></div>

        </div>
        <div className='motius'>
            <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
              <Grid item xs={12} md={4} xl={4}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}} className='itemgrid2'>
                    <div className='flex2'>
                      <div className="icon">
                        <img src={qualitat} className='iconfoto'></img>
                      </div>
                      <div className='flex'>
                        <div  className='smalltitles'>
                          Qualitat
                        </div>
      
                        <div className='undertext'>
                          Sempre vetllem pel millor resultat possible.
                        </div>
                      </div>
                    </div>
                  </Item>
              </Grid>

              <Grid item xs={12} md={4} xl={4} sx={{ setPetit: {xs:true, md:false }}}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}} className='itemgrid2'>
                    <div className='flex2'>
                      <div className="icon">
                        <img src={experiencia} className='iconfoto'></img>
                      </div>
                      <div className='flex'>
                        <div  className='smalltitles'>
                            Experiència
                        </div>
      
                        <div className='undertext'>
                          Comptem amb l'experiència de tota una vida dedicada al sector.
                        </div>
                      </div>
                    </div>

                  </Item>
              </Grid>
              <Grid item xs={12} md={4} xl={4} sx={{ setPetit: {xs:true, md:false }}} >
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}} className='itemgrid2'>

                    <div className='flex2'>
                      <div className="icon">
                        <img src={innovacio} className='iconfoto'></img>
                      </div>
                      <div className='flex'>
                        <div  className='smalltitles'>
                          Innovació
                        </div>
                        <div className='undertext'>
                          Som una empresa pionera a Catalunya que ofereix aquest servei.
                        </div>
                      </div>
                    </div>
                  </Item>
              </Grid>
            </Grid>
          </div>
        </div>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-around",width:"80%"}}>
        <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly",opacity:opacitat3, transition:"all 0.5s ease-in-out"}}>
              <Grid item xs={12} md={6} xl={6}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                  <div className='fotodiv1'>
                    <img src={cupra} className='foto'></img>
                  </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
              <div className='text'>
              <div className='titols' style={{borderBottom:"1px solid black"}}>ELS NOSTRES SERVEIS</div>
              <div style={{display:"flex", alignItems:"center", right:esquerra, position:"relative", transition:"all 0.5s ease-in-out"}} className='englobat'>
                <div className='rodona'>01</div>
                <div>
                  <div className='tittles'>CALIBRACIONS MULTIMARCA</div>
                  <span>A La Planxisteria oferim serveis de calibració per a sistemes ADAS multimarca. </span>
                </div>

              </div>
              <div style={{display:"flex", alignItems:"center"}} className='englobat'>
                <div className='rodona'>02</div>
                <div>
                  <div className='tittles'>PLANXA I PINTURA</div>
                  <span>També oferim servei de planxa i pintura pel seu vehicle.</span>
                </div>
              </div>
              <div style={{display:"flex", alignItems:"center"}} className='englobat'>
                <div className='rodona'>03</div>
                <div>
                  <div className='tittles'>EXPERIÈNCIA</div>
                  <span>Disposem de l'experiència i les eines necessàries per assegurar que els sistemes d'assistència a la conducció funcionin correctament i amb la màxima precisió.</span>
                </div>
              </div>
              <div style={{display:"flex", alignItems:"center"}} className='englobat'>
                <div className='rodona'>04</div>
                <div>
                  <div className='tittles'>CERTIFICAT DE CALIBRACIÓ</div>
                  <span>Fem entrega d'un certificat que acredita que la calibració dels radars, càmeres, sensors i lidars del vehicle ha estat realitzada de manera correcta i conforme als estàndards tècnics exigits.</span>
                </div>
              </div>
                  </div>
                </Item>
              </Grid>
            </Grid>
            </div>

        <div style={{display:"flex", alignItems:"center",justifyContent:"space-around", marginTop:"5%",width:"80%"}}>
        <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly",opacity:opacitat4, transition:"all 0.5s ease-in-out"}}>
              <Grid item xs={12} md={6} xl={6}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='text'>
                    <div className='titols' style={{borderBottom:"1px solid black"}}>PER QUÈ ESCOLLIR-NOS?</div>
                    <div style={{display:"flex", alignItems:"center"}} className='englobat'>
                      <div className='rodona'>05</div>
                      <div>
                        <div className='tittles'>TECNOLOGIA AVANÇADA</div>
                        <span>Utilitzem equips d'última generació que ens permeten garantir la màxima precisió en totes les calibracions, assegurant que el seu vehicle compleixi amb els requeriments més estrictes del sector. </span>
                      </div>

                    </div>
                    <div style={{display:"flex", alignItems:"center"}} className='englobat'>
                      <div className='rodona'>06</div>
                      <div>
                        <div className='tittles'>ATENCIÓ PERSONALITZADA</div>
                        <span>Oferim un tracte proper i personalitzat, adaptant-nos a les necessitats específiques de cada client i vehicle per oferir solucions a mida.</span>
                      </div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}} className='englobat'>
                      <div className='rodona'>07</div>
                      <div>
                        <div className='tittles'>GARANTIA I SEGURETAT</div>
                        <span>Totes les nostres intervencions estan garantides, oferint-li la tranquil·litat de saber que el seu vehicle està en mans de professionals qualificats i amb experiència.</span>
                      </div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}} className='englobat'>
                      <div className='rodona'>08</div>
                      <div>
                        <div className='tittles'>CONFIANÇA I TRANSPARÈNCIA</div>
                        <span>Els nostres clients confien en nosaltres per la nostra transparència en els processos i per oferir sempre la millor relació qualitat-preu.</span>
                      </div>
                    </div>
                    </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='fotodiv1' style={{marginLeft:"20%"}}>
                      <img src={mercedes2} className='foto'></img>
                    </div>
                    </Item>
                </Grid>
            </Grid>

        </div>
        <div style={{width:"100%", height:"500px", marginTop:"5%", position:"relative"}}>
            <img src={accident} 
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex:"1",
              position:"relative"
            }}>
            </img>
            <div  className='textimatge' style={{zIndex:"1"}}>
              <span style={{position:"relative", right:dreta, transition:"all 0.5s ease-in-out"}}>
                  EVITA ACCIDENTS
              </span>
              <div className='botohora' onClick={() => {navigate('/contacte');window.scrollTo(0, 0);}}  onMouseEnter={() => {setAmpladaralla("15%")}} onMouseLeave={() => {setAmpladaralla("0%")}}>
              <div className='rallaboto' style={{
                width:ampladaralla,

              }}></div>
                DEMANA HORA
              </div>
            </div>
        </div>

        <div style={{width:"80%", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center",width:"100%"}}>
              <div className='ralla4' style={{width:"30%"}}></div>
              <div className='titols'>SISTEMA DE CALIBRATGE</div>
              <div className='ralla5' style={{width:"30%"}}></div>
          </div>
          <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", marginBottom:"5%", textAlign:"justify"}}>
              <Grid item xs={12} md={7} xl={7} style={{position:"relative",left:dreta2,transition:"all 0.5s ease-in-out"}}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}} className='itemgrid2'>
                  <div className='divmaquina'>
                    <img className='imgmaquina' src={maquinatexa}></img>
                  </div>
                  </Item>
              </Grid>
              <Grid item xs={12} md={7} xl={5}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}} className='itemgrid2'>
                    <div className='texttexa'>
                      <div className='tittles'>TEXA RCCS 3</div>
                      <p>
                        Disposem del Sistema de Calibratge TEXA RCCS 3 d’última generació, el qual ens permet
                        realizar calibracions estàtiques i dinàmiques, assegurant el correcte restabliment dels ADAS i
                        garantint la seguretat del conductor.
                      </p>
                      <p>
                        RCCS 3 BT amb Monitor és la solució de TEXA per a la configuració de radars, LIDAR, càmeres i sensors a través de la representació digital dels panells.
                      </p>
                      <p>
                        Està equipat amb una pantalla HD de 75 polzades, definició 4K, que ofereix sempre una visualització òptima, complint amb la proporció 1:1 d'acord amb les especificacions de cada fabricant. 
                      </p>
                    </div>
                  </Item>
              </Grid>
            </Grid>
            <div style={{width:"60%", height:"auto"}}>
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/UufzjTgqIM8?si=dG5c87DsxMBvoa4Q" frameborder="0"  allowFullScreen></iframe>
            </div>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center",width:"80%"}}>
            <div className='ralla4' style={{width:"20%"}}></div>
            <div className='titols'>EXEMPLES A LES XARXES SOCIALS</div>
            <div className='ralla5' style={{width:"20%"}}></div>
        </div>
        <div style={{width:"70%", height:"555px"}}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lfoyvTRs2Po?si=jyHImIJb4ykN2NEa" frameborder="0" allowFullScreen ></iframe>
        </div>

    </div>
)
}

export default Treball;
