import TareaFormulario from "./TareasFormularios";
import '../styles/ListaDetareas.css'
import Tarea from  "./tareas";
import { useState } from "react"; //Para importar um Hook e nessesario as chaves {}

function ListaDeTarefas() {
 //Para usar o hook useState precisamos contruir essa const
 /*O navegador em react nao consegue mostrar que Algum dado mudou! isso acontece porque o react mantem o estado. caso queiramos aplicar a mudança de estado de aacordo com valor devemos avisar o react para alterar o  seu estado. Para isso criamos uma const [nome da var, funçao que atualiza estado] = useState(estado inicial)  .  entao o nome da sua var vai ter o valor de use State(Ou seja avisamos ao react o estado inicial da variavel agora). Para aver uma mudança se usa a funçao que ira pegar o valor anterior e atual e mudar o estado de tareas*/
  const [tareas,settareas] = useState([]);//A logica com useState([]) é a mesma
  //Quando lidamos com apenas um dado podemos usar asfuncoes arrow assim por ex : '  const isaMen = x => x >18  ' declaramos uma funcao com um parametro de x que retorna que x é maior que 18. o return e altomatico, podemos passar um parammetro vazio () no lugar de x
  const agregarTarea = Tarea =>{
    if(Tarea.texto.trim()) { // Verificando se á espacos
      Tarea.texto = Tarea.texto.trim();  //acessasndo a props texto da funcao Tarea usando '.' e definindo ela. e eliminando os espaços
      //  '...' os tres pontos e usad para copiar ou fazer uma combinação ou expansão de valores em arrays ou objetos.
      const tareasActualizadas =[Tarea,...tareas];
      settareas(tareasActualizadas); //Estado de settareas = tareasActualizadas
    }
  }
  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    settareas(tareasActualizadas);
  }
  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(Tarea =>{
      if(Tarea.id === id){
        Tarea.completada = !Tarea.completada;
      }
      return Tarea;
    });
    settareas(tareasActualizadas);
  }
  return (
    <> {/*simlesmente nao incorpora nenum div na estrutura do codigo*/}
    <TareaFormulario onSubmit={agregarTarea}/>
    <div className="tarefas-lista-contenedor">
      {
        tareas.map((tarea) => //.map adiciona tarefas cada vez que agregartarefaz e chamado.
          <Tarea 
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
          />
        )
      }
    </div>
    </>
  );
}
export default ListaDeTarefas;