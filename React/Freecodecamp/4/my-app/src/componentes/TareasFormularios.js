import { useState } from 'react'
import '../styles/TareasFormularios.css'
import { v4 as uuidv4 } from 'uuid' //gerador de id unico

function TareaFormulario(props){ //props serve para criar props.customizadas dentro das chaves

  const [input,setinput] = useState(); 

  const manejarCambio = e =>{
    setinput(e.target.value); //Extraindo valor value de e.target campo de texto
    console.log(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault(); //preventDefault inpede que toda pagina volte a carregra novamente a cada chamada ao manejaEnvio
    console.log('enviando formulario...')
    const tareaNueva = {
      id: uuidv4(), //Gerador de id unico
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva) //quando envia o formulario onSubmite executa tareaNueva.
  }
  return (
    <form className="tareas-formulario"
    onSubmit={manejarEnvio}>
      <input
      className="tarea-input"
      type="text" 
      placeholder='Escreva uma Tarefa'
      name="texto"
      onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );

}
export default TareaFormulario;