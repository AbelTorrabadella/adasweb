import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/menu2.css';
import CloseIcon from '@mui/icons-material/Close';
function Menu2(props) {
    const navigate = useNavigate();
    const [ampladamenu2, setAmpladamenu2] = useState("0%")

  /*--------------------------------------------------*/
  useEffect(() => {
    if (props.ampladamenu !== true) {
        setAmpladamenu2('100%');
    }
    else {
        setAmpladamenu2("0%")
    }

  }, []);
  return (
    <div className="petit" style={{display:"flex", flexDirection:"column", width:ampladamenu2, alignItems:"center", transition:"all 1s ease-in-out"}}>      
        <div>
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
