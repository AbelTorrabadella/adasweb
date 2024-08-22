import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

const PublicLayout = (props) => {
    return (
    <div>
        <Menu isPortada={props.isPortada}/>
        <div style={{display:"flex",justifyContent:"center" ,position:(props.isPortada ? "" : "relative"), marginTop: (props.isPortada ? "0" : "200px")}}>
            <Outlet />
        </div>
        <Footer />
    </div>
    )
}
export default PublicLayout;