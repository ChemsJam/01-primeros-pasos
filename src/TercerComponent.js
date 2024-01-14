import React from 'react';
import { PropTypes } from 'prop-types';
export const TercerComponente = ({
                                  nombre = 'Tujan', 
                                  apellido ='Faro', 
                                  ficha
                                }) => {


  return (
    <div>
        <h1>Mi tercer componente</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.sangre}</li>
            <li>{ficha.estado}</li>
            <li>{ficha.alergias}</li>
        </ul>
    </div>
  )
}


TercerComponente.propTypes = {
  nombre : PropTypes.string.isRequired,
  apellido : PropTypes.string.isRequired,
  ficha : PropTypes.object
}

TercerComponente.defaultProps ={
  nombre: "Tujan",
  apellido: "Faro"
}