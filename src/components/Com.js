import { useEffect, useState } from 'react';
import "../css/com.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import primera from "../img/grid1/1.jpg"
import segona from "../img/grid1/2.jpg"
import tercera from "../img/grid1/3.jpg"
import quarta from "../img/grid1/4.jpg"
import cinquena from "../img/grid1/5.jpg"
import sisena from "../img/grid1/6.jpg"
import setena from "../img/grid1/7.jpg"
import vuitena from "../img/grid1/8.jpg"
import novena from "../img/grid1/9.jpg"

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


function Com() {
  const [fotoOberta, setFotoOberta] = useState(false);
  //IMATGES---------------------------------------------------------------
  const [imatges, setImatges] = useState([primera,segona,tercera,quarta,cinquena,sisena,setena,vuitena,novena])
  const [imatgeSeleccionada, setImatgeSeleccionada] = useState(0);
  const Item = styled(Paper)(({ theme }) => ({

  }));
  function dreta(){
    setImatgeSeleccionada(imatgeSeleccionada + 1);
    if (imatgeSeleccionada == imatges.length -1){
      setImatgeSeleccionada(0);
    }
  }
  function esquerra(){
    setImatgeSeleccionada(imatgeSeleccionada - 1);
    if (imatgeSeleccionada == 0){
      setImatgeSeleccionada(imatges.length-1);
    }
  }
  function onClickImatge(index){
    setFotoOberta(true);
    setImatgeSeleccionada(index)

  }
  function tencarImatge(){
    setFotoOberta(false);
  }
  //---------------------------------------------------------------IMATGES

  /*--------------------------------------------------*/
  return (
    <div className="com">      
      <div style={{display:"flex", alignItems:"center", width:"80%"}}>
            <div className='ralla4'></div>
            <div className='titols'>CANVI DE PARABRISES</div>
            <div className='ralla5' style={{width:"65%"}}></div>
        </div>
        <div className='grid1' style={{width:"80%"}}>
          <Grid container spacing={2} className="grid1">
            {imatges.map((imatge, index) => {
              return (
              <Grid item xs={12} md={6} xl={4}>
                <Item className='itemfoto'>
                    <div className='imatgess' onClick={() => {onClickImatge(index)}}>
                      <img src={imatge}></img>     
                    </div>
                </Item>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div className={'div-clicked ' + (fotoOberta ? 'obert' : '')} style={{transition:'all 1s ease-in-out'}}>
          <img src={imatges[imatgeSeleccionada]} className='div-clicked-img'></img>
          <div className='arrows2'>

          <div className="esquerra_img" onClick={esquerra}><KeyboardArrowLeftIcon htmlColor='#fff' sx={{width: '70px', height: '70px', cursor:"pointer"}}/></div>
          <div className="dreta_img" onClick={dreta}><KeyboardArrowRightIcon htmlColor='#fff' sx={{width: '70px', height: '70px',cursor:"pointer"}}/></div>

          </div>
          <div className='tencar' onClick={() => {tencarImatge()}}>
            <CloseIcon className='close' style={{cursor:"pointer"}}></CloseIcon>
          </div>    
        </div>   
    </div>
)
}

export default Com;
