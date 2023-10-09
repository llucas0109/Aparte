import './App.css';
import logofreecode from './imagens/freecodecamp-logo.png'
import ListaDeTarefas from './componentes/ListaDeTarefa';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='frecode-logo'>
        <img src={logofreecode} className='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1> Minhas tarefas </h1>
        <ListaDeTarefas />
        {/*<Tareas texto='Aprender React' />*/}
      </div>

    </div>
  );
}

export default App;
