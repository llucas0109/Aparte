import React from "react";
import '../stylesheets/Testimonio.css'

class Testimonio extends React.Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio" src={require(`../imagens/testimonio-${this.props.imagem}.png`)} />
          <div className="contenedor-de-texto-testimonio">
            <p className="nombre-testimonio"><strong>{this.props.nome}</strong> em {this.props.pais}</p>
            <p className="cargo-testimonio">{this.props.cargo}  em <strong>{this.props.empresa}</strong></p>
            <p className="texto-testimonio">"{this.props.testimonio}"</p>
          </div>
      </div>
      );
  }
}

/*Colocamos export antes de function para exportar ela */
export default Testimonio;
//Existem dois tipos de exportaçao numerada ou por defcto . um unico componte  seria por defcto mais de um coponente numerada na hora que importar vai er que selecionar qual funçao se refere.
