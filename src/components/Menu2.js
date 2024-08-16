import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Menu2() {
    const navigate = useNavigate();

  /*--------------------------------------------------*/
  return (
    <div className="petit" style={{display:"flex", flexDirection:"column", width:"80%", alignItems:"center"}}>      
        <div>
            X
        </div>
        <div className="" onClick={() => {navigate('treball')}}>
            CALIBRACIONS
        </div>
        <div className="" onClick={() => {navigate('tipus')}}>TIPUS D'ADAS</div>
        <div className="" onClick={() => {navigate('faqs')}}>FAQs</div>
        <div className="" onClick={() => {navigate('localitzacio')}}>LOCALITZACIÓ</div>
        <div onClick={() => {navigate('contacte')}}>CONTACTE</div>
        
    </div>
)
}

export default Menu2;
