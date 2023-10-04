import React from "react";
import '../stylesheets/Testimonio.css'
/*Colocamos export antes de function*/
export function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagens/testimonio-${props.imagem}.png`)} alt="Foto De Emma"/>
        <div className="contenedor-de-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.nome}</strong> em {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo}  em <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
    </div>
    )
}
//Existem dois tipos de exportaçao numerada ou por defcto . um unico componte  seria por defcto mais de um coponente numerada na hora que importar vai er que selecionar qual funçao se refere.
