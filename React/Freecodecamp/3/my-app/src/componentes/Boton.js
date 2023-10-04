  function Boton(props){
    const esOperador = valor =>{
      return 
    }
//null = nenhuma por exemplo null para definir classe de um ?:
  return(
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}> 
       {props.children  /*props.children é comando rezervado react das proops que permite por elementos dentro das tags la no App*/} 
    </div>
  );
}
export default Boton;