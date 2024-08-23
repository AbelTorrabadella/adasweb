import { useEffect, useState } from 'react';
import "../css/treball.css"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider3 from './Slider3';
import { useNavigate } from 'react-router-dom';

import experiencia from "../img/experiencia.png"
import qualitat from "../img/qualitat.png"
import innovacio from "../img/innovacio.png"
import cupra from "../img/CUPRA.jpg"
import leon from "../img/leon.jpeg"
import mercedes2 from "../img/mercedes2.jpg"

import primera from "../img/grid1/1.jpg"
import segona from "../img/grid1/2.jpg"
import tercera from "../img/grid1/3.jpg"
import quarta from "../img/grid1/4.jpg"
import cinquena from "../img/grid1/5.jpg"
import sisena from "../img/grid1/6.jpg"
import setena from "../img/grid1/7.jpg"
import vuitena from "../img/grid1/8.jpg"
import novena from "../img/grid1/9.jpg"

import accident from "../img/accident.jpeg"
import golfverd from "../img/foto2.jpg"
function Treball() {
  const navigate = useNavigate();
  const [ampladaralla, setAmpladaralla] = useState("0%")
  const Item = styled(Paper)(({ theme }) => ({

  }));
  const slides3 = [
    {imatges: accident, titol:"EVITA ACCIDENTS"},
    {imatges: golfverd, titol:"EVITA ACCIDENTS23"},
]

  /*--------------------------------------------------*/
  return (
    <div className="treball" style={{ width:"100%", display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"10%"}}>      
      <div className='perque' style={{ width:"80%"}}>
        <div style={{display:"flex", alignItems:"center"}}>
            <div className='ralla4'></div>
            <div className='titols'>PER QUÈ TRIAR-NOS?</div>
            <div className='ralla5'></div>

        </div>
        <div className='motius'>
            <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
              <Grid item xs={12} md={4} xl={4}>
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='flex2'>
                      <div className="icon">
                        <img src={qualitat} className='iconfoto'></img>
                      </div>
                      <div className='flex'>
                        <div  className='smalltitles'>
                          Qualitat
                        </div>
      
                        <div className='undertext'>
                          Sempre betllem pel millor resultat possible.
                        </div>
                      </div>
                    </div>
                  </Item>
              </Grid>

              <Grid item xs={12} md={4} xl={4} sx={{ setPetit: {xs:true, md:false }}} >
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='flex2'>
                      <div className="icon">
                        <img src={experiencia} className='iconfoto'></img>
                      </div>
                      <div className='flex'>
                        <div  className='smalltitles'>
                            Experiència
                        </div>
      
                        <div className='undertext'>
                          Comptem amb l'experiencia de tota una vida dedicada al sector.
                        </div>
                      </div>
                    </div>

                  </Item>
              </Grid>
              <Grid item xs={12} md={4} xl={4} sx={{ setPetit: {xs:true, md:false }}} >
                  <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>

                    <div className='flex2'>
                      <div className="icon">
                        <img src={innovacio} className='iconfoto'></img>
                      </div>
                      <div className='flex'>
                        <div  className='smalltitles'>
                          Innovació
                        </div>
      
                        <div className='undertext'>
                          Som una empresa pionera a Catalunya que ofereix aquest servei
                        </div>
                      </div>
                    </div>
                    
                  </Item>
              </Grid>
            </Grid>
          </div>
        </div>

        <div style={{display:"flex", alignItems:"center",justifyContent:"space-around",width:"80%"}}>
        <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
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
              <div style={{display:"flex", alignItems:"center"}} className='englobat'>
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
        <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
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
              <span>
                  EVITA ACCIDENTS
              </span>
              <div className='botohora' onClick={() => {navigate('/contacte')}}  onMouseEnter={() => {setAmpladaralla("15%")}} onMouseLeave={() => {setAmpladaralla("0%")}}>
              <div className='rallaboto' style={{
                width:ampladaralla,

              }}></div>
                DEMANA HORA
              </div>
            </div>

        </div>
        <div style={{display:"flex", alignItems:"center", width:"80%"}}>
            <div className='ralla4'></div>
            <div className='titols'>CANVI DE PARABRISES</div>
            <div className='ralla5' style={{width:"65%"}}></div>
        </div>
        <div className='grid1' style={{width:"80%"}}>
          <Grid container spacing={2} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={primera}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={segona}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={tercera}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={quarta}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={cinquena}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={sisena}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={setena}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={vuitena}></img>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Item className='itemfoto'>
                        <img src={novena}></img>
                    </Item>
                </Grid>
            </Grid>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center",width:"80%"}}>
            <div className='ralla4' style={{width:"20%"}}></div>
            <div className='titols'>MÉS EXEMPLES A LES XARXES SOCIALS</div>
            <div className='ralla5' style={{width:"20%"}}></div>
        </div>
        <div style={{width:"70%", height:"555px"}}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lfoyvTRs2Po?si=jyHImIJb4ykN2NEa" frameborder="0" allowFullScreen ></iframe>
        </div>

    </div>
)
}

export default Treball;
