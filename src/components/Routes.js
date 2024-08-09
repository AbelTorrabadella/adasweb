import React from "react";
import PublicLayout from "./PublicLayout";
import Portada from "./Portada";
import Contacte from "./Contacte";
import Tipus from "./Tipus";

const routes = (isPortada) => [
    {
    path: "/",
    element: <PublicLayout isPortada={isPortada}/>,
    children: [
        { path: "/", element: <Portada />},
        { path: "/Contacte", element: <Contacte />},
        { path: "/Tipus", element: <Tipus />},

    ],
}
];

export default routes;