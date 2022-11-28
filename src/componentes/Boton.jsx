import React from "react";
import '../hojas-de-estilo/Boton.css'
function Boton(props){

    const esOperador = valor=>{
        return isNaN(valor) && (valor != '.') && (valor != '=')
    }

return(
    <div className={`bonton-contenedor ${esOperador(props.children) ? 'operador': ''}`
    .trim()} onClick={() =>props.manejarClic(props.children)}>
        {props.children}
    </div>
)
}

export default Boton