import '../styles/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea( {id, texto , completada, completarTarea, eliminarTarea} ) {
    return(
      <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
        <div 
        //On click precisa executar uma funcao, Usamos uma funcao de retorno anonima () => que retorna nesse caso
        onClick={() => completarTarea(id)} //completarTarea é um prop que se torna uma fucao.
        className="tarea-texto">
          {texto}
        </div>
        <div 
        onClick={() => eliminarTarea(id)}
        className="tarea-contenedor-iconos">
          <AiOutlineCloseCircle className="tarea-icon" />
        </div>
      </div>
    );
}
export default Tarea;