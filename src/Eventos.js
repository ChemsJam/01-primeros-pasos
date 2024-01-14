import React from 'react'

export const Eventos = () => {
  
    const DistecUnClick = (e, nombre) =>{
        alert("Diste un click a mi primer boton en react  :D "+nombre)
    }
    
    function disteDobleClick(e){
        alert("Diste doble Click panita!!")
    }

    const Entraste = e=>{
        console.log("Entraste a la caja con el cursor")
    }

    const Saliste = e=>{
        console.log("Salistede la caja con el cursor")
    }

    const estasDentro = e =>{
        console.log("Estas dentro del input, pon tu nombre pana");
    }
    
    const estasFuera = e =>{
        console.log("Estas fuera...")
    }
    return (
    <div>
        <p>Eventos en React</p>
        {/*Evento click*/}
        <p>
        <button onClick={e =>DistecUnClick(e, "Tavito")}>Dame Click</button>
        </p>

        <p>
        <button onDoubleClick={disteDobleClick}>Doble Click</button>
        </p>
        
        <div id="caja" 
        onMouseEnter = {Entraste}
        onMouseLeave={Saliste}
        >
            <h1>pasa por encima BB</h1>
            
        </div>

        <p>
            <input type="text"
                    onBlur={ estasFuera}
                    onFocus={estasDentro} 
                    placeholder='Introduce tu nombre...'/>
        </p>

    </div>
  )
}
