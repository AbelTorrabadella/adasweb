import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

const PublicLayout = (props) => {
    return (
    <div>
        <Menu isPortada={props.isPortada}/>
        <div style={{position:(props.isPortada ? "" : "relative"), top: (props.isPortada ? "0" : "150px")}}>
            <Outlet />
        </div>
        <Footer />
    </div>
    )
}
export default PublicLayout;