// Importar modulos de react / dependencias
import React from "react";

// Funcion del componente
const MiComponente = () => {


    const nombre = "Johan";
    const apellido ="Ontiveros";
    const web = "JohanPortfolio.com";
    
    let usuario ={
        nombre: nombre,
        apellido: apellido,
        web:web
    };

    return (
        <div className="MiComponente">
            <h2>Mi primer componente</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.apellido}</li>
                <li>Web: {usuario.web}</li>
            </ul>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    )
};

//Export
export default MiComponente;