import './App.css'
// Em REACT Os dados nao sao alterados Eles sao Substituidos do zero. Isso se chama imutabilidade o react entende que deve atualizar o valor somente quando o valor apagado completamente e colocado um novo
import { useState } from 'react'; //Avisa estado
import { v4 as abacateid } from 'uuid'; //{ v4 as uuidv4 } pega funcao e tranforma para serlida como abacateid()

//Todos os componentes(ou seja funçoes) devem ter letras maiusculas para diferenciar das tags
function App() { 
  //Somente CoDigos js
  //significa criaçao tambem um objeto{}  
  //dentro do useState(Aqui Fica o estado inicioal pode ser qualquer coisa)
  const [list,setlist] = useState([{id: abacateid, text: 'Rico'}]) 
  //event que é um parametro de inputMudou se acessado pode nos dar as informacoes do que foi alterado por exemplo.
  console.log(useState('test'))
  function inputMudou(event){ 
    console.log(event.target.value) //Coloca no console.log o que foi digitado no caso deinput de texto de um onChange
    setlist([{id: abacateid, text: event.target.value}]) //Adiciona um novo item dentro do array
    console.log(list)
  }
  function click() {
    console.log('clicou no botao');
  }
  //Return Para codigos html
  //CASO em algum momento queiramos usar codigo js temos que usar as {}
  return ( // No return retorna Apenas UMA tag.
    <> {/*Fragment = <> </>*/}
      {/*onChange = evento de quando á uma mudançano estado*/}
      <input onChange={inputMudou} type="text" placeholder='Digite a Tarefa'/> 
      <button onClick={click} >  Click her </button>
      <ul>
        {
          //map mapea item por item para poder fazer o q quiser com ele Primeiro O primeiro item da lista dai ele passa de novo e vai pro segundo item 
          //Quando coloca () direto na funcao flexa ja indica que Sera um return altomatico. se fosse com {} teria que por o return dentro
         list.map( item => (  //map joga um por um COMO um for loop  os itens da list de parametro da funçao flexa item.
            <li key={item.id}>{item.text}</li> //Precisamos por uma key para cada item 'li' Obrigatoriamente Em jsx
         )
         ) 
        }
      </ul>
    </>
  );
}
/*const list = [vidro,cidade];  const[1,2] = list; OU seja '1' tera o valor de list 'vidro' e '2' tera valor de list 'cidade'*/
export default App;
