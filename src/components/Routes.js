import React from "react";
import PublicLayout from "./PublicLayout";
import Portada from "./Portada";
import Contacte from "./Contacte";
import Tipus from "./Tipus";
import Treball from "./Treball";
import Preguntes from "./Preguntes"

const routes = (isPortada) => [
    {
    path: "/",
    element: <PublicLayout isPortada={isPortada}/>,
    children: [
        { path: "/", element: <Portada />},
        { path: "/Contacte", element: <Contacte />},
        { path: "/Tipus", element: <Tipus />},
        { path: "/Treball", element: <Treball />},
        { path: "/Preguntes", element: <Preguntes />},

    ],
}
];

export default routes;