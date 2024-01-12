import React from 'react'

export const SegundoComponent = () => {

  const libros =["Harry Potter", "Juego de tronos", "Clean code"];
  //const libros = [];


  return (
    <div className='segundo-componente'>
      <h2>Mi segundo componente</h2>
      <h1>Listado de libros</h1>
      {libros.length >= 1 ?
        (
        <ul>
          {
            libros.map((libro, indice) => {
              return <li key={indice}>{libro}</li>;
            })
          }
        </ul>
        ) 
        :
        (
        <p>No hay libros</p>
        )
      }
    </div>
  )
}
