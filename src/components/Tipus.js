import { useEffect, useState } from 'react';
import "../css/tipus.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import isa from "../img/tipus/isa.jpg"
import rev from "../img/tipus/rev.jpg"
import bsm from "../img/tipus/bsm.jpg"
import fcw from "../img/tipus/fcw.jpg"
import ldw from "../img/tipus/ldw.png"
import aeb from "../img/tipus/aeb.jpg"
import tsr from "../img/tipus/tsr.png"
import rcta from "../img/tipus/rcta.jpg"
import ddr from "../img/tipus/ddr.jpeg"
import lka from "../img/tipus/lka.jpg"
import aebpc from "../img/tipus/aebpc.png"
import ess from "../img/tipus/ess.jpg"
function Tipus() {
    const Item = styled(Paper)(({ theme }) => ({

    }));
  return (
    <div className="primer2">
        <div style={{width:"80%", height:"1px", backgroundColor:"black"}} ></div>

        <div className='titols' style={{justifyContent:"center"}}>TIPUS D'ADAS</div>
        <div style={{width:"80%", height:"1px", backgroundColor:"black", marginBottom:"5%"}} ></div>
            <div className="tipus">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                        <div className="fons">
                            <div>
                                <img src={isa} className='fotoadas'></img>
                            </div>
                            <div>
                                <div className="titolstipus">
                                    ISA (Asistent intel·ligent de velocitat)
                                </div>
                                <div className="subtitolstipus">
                                    Ajuda els conductors a mantenir-se dins dels límits de velocitat mitjançant avisos i intervencions automàtiques, utilitzant GPS i reconeixement de senyals de trànsit.
                                </div>
                            </div>
  
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={rev} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        REV (Detector de marxa enrere)
                                    </div>
                                    <div className="subtitolstipus">
                                        Alerta al conductor sobre obstacles darrere del vehicle mitjançant sensors i càmeres, millorant la seguretat en maniobres de reversa.
                                    </div>
                                </div>
                            </div>
                        
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                        <div className="fons">
                            <div>
                                <img src={bsm} className='fotoadas'></img>
                            </div>
                            <div>
                                <div className="titolstipus">
                                    BSM (Sistema de monitorització d'angles morts)
                                </div>
                                <div className="subtitolstipus">
                                    Detecta vehicles en els angles morts del conductor, emetent avisos visuals o sonors per evitar col·lisions durant els canvis de carril.                        </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                        <div className="fons">
                            <div>
                                <img src={fcw} className='fotoadas'></img>
                            </div>
                            <div>
                                <div className="titolstipus">
                                    FCW (Avís de Col·lisió Frontal)
                                </div>
                                <div className="subtitolstipus">
                                    Alerta al conductor sobre possibles col·lisions frontals, incloent-hi vianants i ciclistes, per prevenir accidents.
                                    </div>
                            </div>
                        </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={ldw} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        LDW (Sistema d'Advertència d'Abandonament de Carril)
                                    </div>
                                    <div className="subtitolstipus">
                                        Alerta al conductor quan el vehicle es desvia del seu carril sense senyalitzar, ajudant a prevenir sortides involuntàries de la via.
                                    </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                        <div className="fons">
                            <div>
                                <img src={aeb} className='fotoadas'></img>
                            </div>
                            <div>
                                <div className="titolstipus">
                                    AEB (Frenada d'Emergència Urbana i Interurbana)
                                </div>
                                <div className="subtitolstipus">
                                    Activa els frens automàticament per evitar col·lisions o reduir la seva gravetat tant en entorns urbans com interurbans.                        </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={tsr} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        TSR (Reconeixement de Senyals de Trànsit)
                                    </div>
                                    <div className="subtitolstipus">
                                        Identifica i mostra les senyals de trànsit al conductor, ajudant-lo a seguir les normes viàries.
                                    </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={rcta} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        RCTA (Alerta de Trànsit Creuat)
                                    </div>
                                    <div className="subtitolstipus">
                                        Avisa al conductor sobre vehicles que s'aproximen pels costats durant la marxa enrere, millorant la seguretat en maniobres de sortida.
                                    </div>
                                </div>
                            </div> 
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={ddr} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        DDR (Sistema d'Advertència de Sonolència i Distracció)
                                    </div>
                                    <div className="subtitolstipus">
                                        Detecta signes de fatiga o distracció en el conductor i emet avisos per alertar-lo, ajudant a mantenir l'atenció al volant.                        </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={lka} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        LKA (Sistema Avançat de Manteniment de Carril)
                                    </div>
                                    <div className="subtitolstipus">
                                        Ajuda a mantenir el vehicle dins del seu carril mitjançant correccions automàtiques de la direcció si es detecta una desviació involuntària.
                                    </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={aebpc} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        AEB + P + C (Sistema de Frenada Autònoma d'Emergència + detecció de peatons i ciclistes)
                                    </div>
                                    <div className="subtitolstipus">
                                        Aplica els frens automàticament per evitar col·lisions amb vianants i ciclistes, millorant la seguretat en situacions d'emergència.                        </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4} >
                        <Item>
                            <div className="fons">
                                <div>
                                    <img src={ess} className='fotoadas'></img>
                                </div>
                                <div>
                                    <div className="titolstipus">
                                        ESS (Sistema de Frenada d'Emergència)
                                    </div>
                                    <div className="subtitolstipus">
                                        Activa automàticament els frens per reduir la velocitat o aturar el vehicle en situacions d'urgència per evitar col·lisions.
                                    </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
            <div style={{marginTop:"5%"}}>
                <div style={{width:"100%", height:"1px", backgroundColor:"black"}}></div>
                <span className='titols'>POTS CONSULTAR MÉS INFORMACIÓ A LA PÀGINA DE LA DGT</span>
                <div className='link'><a href='https://www.dgt.es/muevete-con-seguridad/conviertete-en-un-buen-conductor/Sistemas-avanzados-de-ayuda-a-la-conduccion-ADAS-/'><div className='boto3'>DGT</div></a></div>
                <div style={{width:"100%", height:"1px", backgroundColor:"black", marginBottom:"5%"}}></div>

            </div>
    </div>
)
}

export default Tipus;
