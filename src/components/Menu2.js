import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/menu2.css';
import CloseIcon from '@mui/icons-material/Close';
function Menu2(props) {
    const navigate = useNavigate();
    const [ampladamenu2, setAmpladamenu2] = useState("0%")
    const [opacitatgran, setOpacitatgran] = useState("0")
    const [opacitatmenu, setOpacitatmenu] = useState("0")

  /*--------------------------------------------------*/
  useEffect(() => {
    if (props.clicked === true) {
        setAmpladamenu2('100%');
        setOpacitatmenu("1")
        setOpacitatgran(0.5)
    }
    else {
        setOpacitatmenu("0")
        setAmpladamenu2("0%")
        setOpacitatgran(0)

        console.log(props.clicked)
    }

  }, [props.clicked]);
  return (
    <div>
        <div className="petit" style={{display:"flex",flexDirection:"column", opacity:opacitatmenu, width:ampladamenu2, alignItems:"center", transition:"all 0.5s ease-in-out"}}>      
        <div className="nav2" onClick={() => {navigate('treball');  props.setClicked(false)}}>
            CALIBRACIONS
        </div>
        <div className="nav2" onClick={() => {navigate('tipus'); props.setClicked(false)}}>TIPUS D'ADAS</div>
        <div className="nav2" onClick={() => {navigate('preguntes');  props.setClicked(false)}}>FAQs</div>
        {/*<div className="" onClick={() => {navigate('localitzacio')}}>LOCALITZACIÓ</div>*/}        
        <div className='nav2' onClick={() => {navigate('contacte');  props.setClicked(false)}}>CONTACTE</div>
        
        </div>
        <div className='gran' style={{opacity:opacitatgran, transition:"all 0.5s ease-in-out"}}>

        </div>
    </div>
)
}

export default Menu2;
