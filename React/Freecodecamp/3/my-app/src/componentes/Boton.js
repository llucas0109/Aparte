import '../styleshyts/boton-style.css'
function Boton(props){ //Podemos usar esse props par definir a props da funçao const de baixo que no caso é valor
  const esOperador = valor =>{ /*Isso é a mesma coisa que funçao esOperador(valor){}*/
  /* isNaN = nao é um numero*/
  /*se tudo nessa funcao se confirmar sera retornado o valor true e caso algo saia errado false*/
    return isNaN(valor) && (valor != '.') && (valor != '=')
  }
//null = nenhuma por exemplo null para definir classe de um ?:
/*Definindo funçao anonima em onclick '() =>' que Simplesmente retorna '=>' um valor */
  return(
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarclick(props.children)}> 
       {props.children  /*props.children é comando rezervado react das proops que permite por elementos dentro das tags la no App*/} 
    </div>
  );
  //trimEnd() Retira os espaços no final da string
}
export default Boton;