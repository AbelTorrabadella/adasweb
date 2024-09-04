import { useEffect, useState } from 'react';
import "../css/com.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import img1 from "../img/COM/1.jpeg"
import img2 from "../img/COM/2.jpeg"
import img3 from "../img/COM/cono1.jpg"
import img4 from "../img/COM/cono2.jpg"
import img5 from "../img/COM/cupra.jpg"
import img6 from "../img/COM/nav.jpeg"

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

import maquinatexa from "../img/maquinatexa.jpg"


function Com() {
  const [fotoOberta, setFotoOberta] = useState(false);
  //IMATGES---------------------------------------------------------------
  const [imatges, setImatges] = useState([primera,segona,tercera,quarta,cinquena,sisena,setena,vuitena,novena])
  const [imatgeSeleccionada, setImatgeSeleccionada] = useState(0);
  const [ampleralla, setAmpleralla] = useState("0%")
  const [primeravegada2, setPrimeravegada2] = useState(true)
  const [dreta2, setDreta2] = useState("-1000px")
  const [ampleralla2, setAmpleralla2] = useState("0%")
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

  const [path, setPath] = useState(window.location.pathname)
  useEffect (() => {
      if (path === "/com"){
          setAmpleralla("100%")
      }
      else{
          setAmpleralla("0%")
      }
  })
  /*--------------------------------------------------*/
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
  if (scrollPosition > 1200){
    setDreta2("0px")
    setAmpleralla2("60%")
  }
}, [scrollPosition]);
/*-------------------------------------------------------------------- */
  return (
    <div className="com">
      <div className='explicacions'>
        <div style={{display:"flex",flexDirection:"column", marginBottom:"5%", marginTop:"2%", textAlign:"justify"}}>
          <h1>COM FEM LES CALIBRACIONS</h1>
          <div style={{height:"2px", width:ampleralla, backgroundColor:"black", transition:"all 1s ease-in-out"}}></div>
        </div>
      <Grid container spacing={6}>
            <Grid item xs={12} md={4} xl={4}>
                <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                  <div className='divimgcom'>
                    <img className='imgcom' src={img1}></img>
                  </div>
                  <div className='textcom'>
                    <div className='titolcom'>
                      CALIBRACIÓ DE LA CÀMARA DEL PARABRISES
                    </div>
                    <div className='subtextcom'>
                      <p>Mitjançant la pantalla podem calibrar la càmara frontal del parabrises de totes les marques del mercat.</p>
                    </div>
                  </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
                <Item style={{boxShadow:"none", backgroundColor:"transparent"}}>
                <div className='divimgcom'>
                    <img className='imgcom' src={img2}></img>
                  </div>
                  <div className='textcom'>
                    <div className='titolcom'>
                      CALIBRACIÓ DEL RADAR DAVANTER
                    </div>
                    <div className='subtextcom'>
                      <p>Mitjançant la placa fixa i seguint els paràmetres que cada fabricant estableix, podem calibrar el radar davanter de les marques i models de vehicles que disposen d'aquest tipus de radar.</p>
                      <p>Per exemple SEAT, VW, Audi, Renault, Dacia, etc.</p>
                    </div>
                  </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
                <Item  style={{boxShadow:"none", backgroundColor:"transparent"}}>
                <div className='divimgcom'>
                    <img className='imgcom' src={img3}></img>
                  </div>
                  <div className='textcom'>
                    <div className='titolcom'>
                      CALIBRACIÓ RADAR DAVANTER 
                    </div>
                    <div className='subtextcom'>
                      <p>Alguns models i marques de vehicles precisen d'un útil específic i uns paràmetres especials.</p>
                      <p>Aquest és el cas dels vehicles Toyota, Kia, Honda, Mazda, etc.</p>
                    </div>
                  </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
                <Item  style={{boxShadow:"none", backgroundColor:"transparent"}}>
                <div className='divimgcom'>
                    <img className='imgcom' src={img4}></img>
                  </div>
                  <div className='textcom'>
                    <div className='titolcom'>
                      CALIBRACIÓ DE RADARS D'ALERTA DE TRÀNSIT CREUAT                    
                    </div>
                    <div className='subtextcom'>
                      <p>Són els radars posteriors que en algunes marques requereixen d'un altre tipus d'útil i paràmetres especifics segons el model de vehicle.</p>
                    </div>
                  </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
                <Item  style={{boxShadow:"none", backgroundColor:"transparent"}}>
                <div className='divimgcom'>
                    <img className='imgcom' src={img5}></img>
                  </div>
                  <div className='textcom'>
                    <div className='titolcom'>
                      ALINIAT DE LES CÀMARES DE VISIÓ 360
                    </div>
                    <div className='subtextcom'>
                      <p>Mitjançant unes lones calibrem la visió de les càmares per poder obtenir una visió 360 idònia.</p>
                    </div>
                  </div>
                </Item>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
                <Item  style={{boxShadow:"none", backgroundColor:"transparent"}}>
                <div className='divimgcom'>
                    <img className='imgcom' src={img6}></img>
                  </div>
                  <div className='textcom'>
                    <div className='titolcom'>
                      CALIBRACIONS DINÀMIQUES
                    </div>
                    <div className='subtextcom'>
                      <p>Alguns models de vehicles exigeixen fer una circulació per carretera pel reposicionament dels paràmetres tal i com exigeix el fabricant.</p>
                    </div>
                  </div>
                </Item>
            </Grid>
        </Grid>
      </div>
      <div style={{width:"80%", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center",width:"100%"}}>
              <div className='ralla4' style={{width:"5%", transition:"all 0.5s ease-in-out"}}></div>
              <div className='titols'>SISTEMA DE CALIBRATGE</div>
              <div className='ralla5' style={{width:ampleralla2, transition:"all 0.5s ease-in-out"}}></div>
          </div>
          <Grid container spacing={5} style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", marginBottom:"5%", textAlign:"justify"}}>
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
            <div style={{width:"80%", height:"auto", marginBottom:"5%"}}>
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/UufzjTgqIM8?si=dG5c87DsxMBvoa4Q" frameborder="0"  allowFullScreen></iframe>
            </div>
        </div>
      <div style={{display:"flex", alignItems:"center", width:"80%"}}>
            <div className='ralla4'></div>
            <div className='titols'>SUBSTITUCIÓ DE PARABRISES</div>
            <div className='ralla5' style={{width:"54%"}}></div>
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
