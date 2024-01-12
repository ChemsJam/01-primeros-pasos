import React from 'react'

export const TercerComponente = ({nombre, apellido, ficha}) => {

  
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
