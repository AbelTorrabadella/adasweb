import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";


const PublicLayout = (props) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [mobil2, setMobil2] = useState(false)
    const [alturamenu2, setAlturamenu2] = useState("0%")

    useEffect(() => {
        const handleResize = () => {
          setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      useEffect(() => {
        console.log({windowSize});
      }, [windowSize]);
    
      useEffect(()=> {
        if (windowSize < 1000 && props.isPortada === false){ //PANTALLA MOBIL
          setAlturamenu2("170px")
        }
        else if (windowSize > 1000 && props.isPortada === true) {
          setAlturamenu2("0")
        }
        else if (windowSize > 1000 && props.isPortada === false) {
            setAlturamenu2("140px")
          }
      } )

    
    return (
    <div>
        <Menu isPortada={props.isPortada}/>
        <div style={{display:"flex",justifyContent:"center" ,position:(props.isPortada ? "" : "relative"), top: alturamenu2}}>
            <Outlet />
        </div>
        <Footer />
    </div>
    )
}
export default PublicLayout;