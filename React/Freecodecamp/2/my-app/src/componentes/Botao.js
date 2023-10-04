import React from "react";
import '../styleshets.css/style-Botao.css';

function botao({ texto, esBotaoDeclick,manejarclick }){ //{ texto } = um parametro direto, inves de props.texto.
  return (
		<button className={ esBotaoDeclick ? "boton-clic" : "boton-reiniciar" }
		onClick={manejarclick}> 
			{texto}
		</button>
	);
}
export default botao; /*Com a esportaçao por default so podemos exportar um elemento do arquivo*/