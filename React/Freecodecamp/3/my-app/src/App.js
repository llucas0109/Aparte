import './App.css';
import free from './imagens/freecodecamp-logo.png'
import Boton from './componentes/Boton'

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={free}
        className='logo'
        alt='logo-freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
