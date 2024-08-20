import { useEffect, useState } from 'react';
import "../css/treball.css"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import experiencia from "../img/experiencia.png"
import qualitat from "../img/qualitat.png"
import innovacio from "../img/innovacio.png"
import cupra from "../img/CUPRA.jpg"
import leon from "../img/leon.jpeg"

import primera from "../img/grid1/1.jpg"
import segona from "../img/grid1/2.jpg"
import tercera from "../img/grid1/3.jpg"
import quarta from "../img/grid1/4.jpg"
import cinquena from "../img/grid1/5.jpg"
import sisena from "../img/grid1/6.jpg"
import setena from "../img/grid1/7.jpg"
import vuitena from "../img/grid1/8.jpg"
import novena from "../img/grid1/9.jpg"

function Treball() {
  const Item = styled(Paper)(({ theme }) => ({

  }));
  /*--------------------------------------------------*/
  return (
    <div className="treball" style={{ width:"80%", marginBottom:"15%"}}>      
      <div className='perque'>
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
                          Sempre betllem pel millor resultat possible
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
                          Comptem amb l'experiencia de tota una vida dedicada al sector
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
        <div style={{display:"flex", alignItems:"center"}}>
            <div className='ralla4'></div>
            <div className='titols'>CALIBRACIONS</div>
            <div className='ralla5' style={{width:"70%"}}></div>
        </div>

        <div style={{display:"flex", alignItems:"center",justifyContent:"space-around"}}>
            <div className='fotodiv1'>
              <img src={cupra} className='foto'></img>
            </div>
            <div className='text'>
              <div className='titols' style={{borderBottom:"1px solid black"}}>CALIBRACIÓ D'ADAS MULTIMARCA</div>
              <div style={{display:"flex", alignItems:"center"}}>
                <div className='rodona'></div>
                <div>
                  <div className='tittles'>CALIBRACIONS MULTIMARCA</div>
                  <span>A La Planxisteria oferim serveis de calibració per a sistemes ADAS multimarca. </span>
                </div>

              </div>
              <div style={{display:"flex", alignItems:"center"}}>
                <div className='rodona'></div>
                <div>
                  <div className='tittles'>EXPERIÈNCIA</div>
                  <span>Disposem de l'experiència i les eines necessàries per assegurar que els sistemes d'assistència a la conducció funcionin correctament i amb la màxima precisió.</span>
                </div>
              </div>
              <div style={{display:"flex", alignItems:"center"}}>
                <div className='rodona'></div>
                <div>
                  <div className='tittles'>COMPROMIS</div>
                  <span>Ens comprometem a proporcionar un servei de qualitat, adaptat a les necessitats específiques de cada client.</span>
                </div>
              </div>
              </div>
            </div>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-around", marginTop:"5%"}}>
            <div className='text'>
            <div className='titols'>CERTIFICAT DE CALIBRACIÓ</div>
            <div>asdadasdadasdadadac adasd aadasd ad adad asdad ad ad</div>
            </div>
            <div className='fotodiv1'>
              <img src={leon} className='foto'></img>
            </div>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
            <div className='ralla4'></div>
            <div className='titols'>CANVI DE PARABRISES D'UN GOLF</div>
            <div className='ralla5' style={{width:"63%"}}></div>
        </div>
        <div className='grid1'>
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
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div className='ralla4' style={{width:"20%"}}></div>
            <div className='titols'>MÉS EXEMPLES A LES XARXES SOCIALS</div>
            <div className='ralla5' style={{width:"20%"}}></div>
        </div>
        <div>
          <iframe width="800" height="555" src="https://www.youtube.com/embed/lfoyvTRs2Po?si=jyHImIJb4ykN2NEa" frameborder="0" allowFullScreen ></iframe>
        </div>
      </div>

    </div>
)
}

export default Treball;
