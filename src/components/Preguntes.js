import { useEffect, useState } from 'react';
import "../css/preguntes.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Preguntes() {
    const [path, setPath] = useState(window.location.pathname)
    const [ampleralla3, setAmpleralla3] = useState("0%")
    useEffect (() => {
        if (path === "/preguntes"){
            setAmpleralla3("100%")
        }
        else{
            setAmpleralla3("0%")
        }
    })
    const Item = styled(Paper)(({ theme }) => ({

    }));
  /*--------------------------------------------------*/

  return (
    <div className="preguntes">
        <div style={{display:"flex",flexDirection:"column", marginBottom:"4%", marginTop:"2%", textAlign:"justify", width:"100%"}}>
          <h1>PREGUNTES FREQÜENTS</h1>
          <div style={{height:"2px", width:ampleralla3, backgroundColor:"black", transition:"all 1s ease-in-out"}}></div>
        </div>

        <Grid container spacing={10}>
            <Grid item xs={12} md={6} xl={6}>
                <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>01</span>
                        <div className='pack'>
                            <div className='pregunta'>Si substitueixo el parabrises del meu cotxe i no desenxufo la càmara, cal calibrar-la?</div>
                            <div className='resposta'>Sempre que es substitueix un parabrises el posicionament de la càmara pot variar, per tan si que és obligatori calibrar la càmara.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>02</span>
                        <div className='pack'>
                            <div className='pregunta'>He tingut un cop a la reixa-suport del radar davanter, cal calibrar?</div>
                            <div className='resposta'>Sempre que considerem que l'impacte hagi pogut moure, ni que sigui milímitres, el radar hem de calibrar-lo i comprovar que el suport estigui bé, del contrari, la visió del radar no serà la correcta i podria no fer la seva funció i per tan no tenir la seguretat pel què ha estat creat.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>03</span>
                        <div className='pack'>
                            <div className='pregunta'>He tingut una rascada al paracops posterior on hi ha el radar, no em marca error al panell del vehicle, cal calibrar?</div>
                            <div className='resposta'>Sempre que es realitzi una reparació a la peça del vehicle que fa de suport requerirà del desmuntatge i muntatge, al igual que els parabrises, serà necessaria la calibració per comprovar el correcte funcionament.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>04</span>
                        <div className='pack'>
                            <div className='pregunta'>El cotxe em força i no va centrat en conducció per carretera, però no ha sortit cap error al panell</div>
                            <div className='resposta'>És un dels casos que necessàriament cal fer una calibració perquè faci bé la funció de manteniment de carril i asseguri la seguretat del vehicle.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
        </Grid>
        <div className='pregunta' style={{marginTop:"8%"}}>
            <p>PER QUALSEVOL CONSULTA ENS POTS ESCRIURE A <a href='/contacte' target=' '>CONTACTE</a>, ESTEM A LA TEVA DISPOSICIÓ!</p>
        </div>
    </div>
)
}

export default Preguntes;
