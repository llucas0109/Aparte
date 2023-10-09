import './App.css'; /*Importa os estilos e aplica aqui em App.js que ira para index.js que ira Renderizar tudo*/
/*Usamo Chaves para selecionar qual funçao queremos importar e precisamos por export antes da function no outro arquivo*/
import { Testimonio } from './Componentes/Testemonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estes sao alunos do codecamp</h1>
      </div>
      <Testimonio  //Chamando a funçao e aplicando as configutraçoes de props
        nome="Shawn wang"
        pais="singapur"
        imagem="shawn"
        cargo="Engenheiro de software"
        empresa="Amazon"
        testimonio="Gostaria de compartilhar com vocês a minha jornada incrível como engenheira de software no Spotify. Trabalhar nesta empresa revolucionária tem sido uma experiência verdadeiramente inspiradora e gratificante, e quero contar a vocês como cheguei aqui e o que torna essa empresa tão especial." /> {/*Chama testimonio E determina configuraçoes das props*/}
         <Testimonio  
        nome="Shara shina"
        pais="nigeria"
        imagem="sarah"
        cargo="Engenheira de software"
        empresa="Amazon"
        testimonio="Gostaria de compartilhar com vocês a minha jornada incrível como engenheira de software no Spotify. Trabalhar nesta empresa revolucionária tem sido uma experiência verdadeiramente inspiradora e gratificante, e quero contar a vocês como cheguei aqui e o que torna essa empresa tão especial." /> {/*Chama testimonio E determina configuraçoes das props*/}
      <Testimonio  
        nome="Emma bostian"
        pais="Belgica"
        imagem="emma"
        cargo="Engenheira de software"
        empresa="Spotfy"
        testimonio="Gostaria de compartilhar com vocês a minha jornada incrível como engenheira de software no Spotify. Trabalhar nesta empresa revolucionária tem sido uma experiência verdadeiramente inspiradora e gratificante, e quero contar a vocês como cheguei aqui e o que torna essa empresa tão especial." /> {/*Chama testimonio E determina configuraçoes das props*/}
    </div>
  );
}

export default App;
