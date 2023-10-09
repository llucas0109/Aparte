import './App.css';
import free from './imagens/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/pantalla';
import Botonclear from './componentes/Botonclear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {
  const [input,setinput] = useState('');
  const agregarinput = val =>{
    setinput(input + val) //Armazena o valor dois valores o input e o val no 'input.
  }; 
  const calcularResultado = () =>{ //funçao flexa para dar simplemente o retorno
    if(input){ //input sem valor sera false se o input tiver valor sera true
      setinput(evaluate(input));
    }
  };
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={free}
        className='logo'
        alt='logo-freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarclick={agregarinput}>1</Boton>
          <Boton manejarclick={agregarinput}>2</Boton>
          <Boton manejarclick={agregarinput}>3</Boton>
          <Boton manejarclick={agregarinput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarinput}>4</Boton>
          <Boton manejarclick={agregarinput}>5</Boton>
          <Boton manejarclick={agregarinput}>6</Boton>
          <Boton manejarclick={agregarinput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarinput}>7</Boton>
          <Boton manejarclick={agregarinput}>8</Boton>
          <Boton manejarclick={agregarinput}>9</Boton>
          <Boton manejarclick={agregarinput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={calcularResultado}>=</Boton>
          <Boton manejarclick={agregarinput}>0</Boton>
          <Boton manejarclick={agregarinput}>.</Boton>
          <Boton manejarclick={agregarinput}>/</Boton>
        </div>
        <div className='fila'>
          <Botonclear manejarclear={() => setinput('')}>Clear</Botonclear>
        </div>
      </div>
    </div>
  );
}

export default App;
