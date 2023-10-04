import './App.css';
//LEIA: Eu Devo em react importar a funçao com A primeira letra do nome dafunçao que vai ser posta aqui em MAIUSCULO. 
import Botao from './componentes/Botao'
import freecodecamp from './imagens/freecodecamp-logo.png'
import Contador from './componentes/contador';
import { useState } from 'react'; //Importando um Hook de react

// NO ARQUIVO APP QUE APLICAOS AS CONFIGURAÇOES Da PASTA COMPONENTE.
function App() { //componente funcional
    /*useState é um hook q permite trabalhar com estados em componentes funcionais*/
    const [numclics2,setnumclics] = useState(0) /*useState é um hook que Monitora a mudança de valor de si mesmo. Ela e aplicado a Primeiro parametro do array no caso numclics2'. para alterar o valor de estado declaramos uma funcao no segundo parametro que e responsavel por atualizar o valor de numclics2 Que é:     useState(0). useState mantem o estado para sempre,mesmo com Re-Loads de funçoes */
  /* manejarclick foi passado para se tornar uma funçao usand: '(param) =>'.  => significa a mesma coisa que a palavra funcao*/
  const manejarclick2 = () => { // const = Variavel que nao se altera
    //console.log('clic');
    setnumclics(numclics2 + 1);
  }
  const reiniciarcontador = () =>{ // => um funcao flecha // () os parametros da funcao 
    //console.log('reinicia');
    setnumclics(0);//Com simplesmente um zero atualiza o estado de numclics 2 para 0 
  }
  return (
    <div className='App'>
     <div className='logo-contenedor'>
      <img 
      className='logo'
      src={freecodecamp} />
     </div>
     <div className='contenedor-principal'>
      <Contador numclick={numclics2} />
      {/*Sao dois botoes diferentes que sao criados da mesma maneira mas aqui No arquivo App definimos o primeiro botao como tru e o segundo como false*/}
      <Botao texto='clic' esBotaoDeclick={true} manejarclick={manejarclick2} />
      <Botao texto='reiniciar' esBotaoDeclick={false} manejarclick= {reiniciarcontador} />{/*Configurando os param da funcao que esta em Botao.js*/}
     </div>
    </div>
  );
}

export default App;
