import { useEffect, useState } from 'react';
import "../css/preguntes.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Preguntes() {
    const [path, setPath] = useState(window.location.pathname)
    const [ampladaralla3, setAmpladaralla3] = useState("0")
    useEffect (() => {
        if (path === "/preguntes"){
            setAmpladaralla3("100%")
        }
        else{
            setAmpladaralla3("0%")
        }
    })
    const Item = styled(Paper)(({ theme }) => ({

    }));
  /*--------------------------------------------------*/
  return (
    <div className="preguntes">
        <div className='titols'>
            <span>PREGUNTES FREQÜENTS</span>
        </div>
        <div style={{width:ampladaralla3, height:"1px", backgroundColor:"black", transition:"all 1s ease-in-out"}}></div>

        <Grid container spacing={10}>
            <Grid item xs={12} md={4} xl={6}>
                <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>01</span>
                        <div className='pack'>
                            <div className='pregunta'>¿Cuál es el animal más grande del mundo?</div>
                            <div className='resposta'>La ballena azul es el animal más grande del mundo, llegando a medir hasta 30 metros de longitud y pesar alrededor de 200 toneladas.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>02</span>
                        <div className='pack'>
                            <div className='pregunta'>¿Cuál es el animal más grande del mundo?</div>
                            <div className='resposta'>La ballena azul es el animal más grande del mundo, llegando a medir hasta 30 metros de longitud y pesar alrededor de 200 toneladas.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>03</span>
                        <div className='pack'>
                            <div className='pregunta'>¿Cuál es el animal más grande del mundo?</div>
                            <div className='resposta'>La ballena azul es el animal más grande del mundo, llegando a medir hasta 30 metros de longitud y pesar alrededor de 200 toneladas.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>04</span>
                        <div className='pack'>
                            <div className='pregunta'>¿Cuál es el animal más grande del mundo?</div>
                            <div className='resposta'>La ballena azul es el animal más grande del mundo, llegando a medir hasta 30 metros de longitud y pesar alrededor de 200 toneladas.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>05</span>
                        <div className='pack'>
                            <div className='pregunta'>¿Cuál es el animal más grande del mundo?</div>
                            <div className='resposta'>La ballena azul es el animal más grande del mundo, llegando a medir hasta 30 metros de longitud y pesar alrededor de 200 toneladas.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={6}>
                <Item style={{ display:"flex", justifyContent:"center", boxShadow:"none", backgroundColor:"transparent"}}>
                    <div className='item'>
                        <span className='numero2'>06</span>
                        <div className='pack'>
                            <div className='pregunta'>¿Cuál es el animal más grande del mundo?</div>
                            <div className='resposta'>La ballena azul es el animal más grande del mundo, llegando a medir hasta 30 metros de longitud y pesar alrededor de 200 toneladas.</div>
                        </div>
                    </div>
                </Item>
            </Grid>
            
        </Grid>

    </div>
)
}

export default Preguntes;
