import { Container, Painel, Button, Input, ListIcon, Trash, Marker} from './style'; //importando o style.js Painel e Container

// Em REACT Os dados nao sao alterados Eles sao Substituidos do zero. Isso se chama imutabilidade o react entende que deve atualizar o valor somente quando o valor apagado completamente e colocado um novo
import { useState } from 'react'; //Avisa estado
import { v4 as uuidv4 } from 'uuid' //{ v4 as uuidv4 } 'as' pega a funcao v4() e tranforma para 'uuidv4()'

//Todos os componentes(ou seja funçoes) devem ter letras maiusculas para diferenciar das tags
function App() { 

  const [list,setlist] = useState([])
  const [task,settask] = useState('')

  function inputMudou(event) { 
    settask(event.target.value) 
  }
  
  function click() {  
   if(task){
   setlist([...list ,{id: uuidv4(), text: task, finished: false}])} // '...' Sao chamados de spreeds eles esparam os itens de dentro de um array pra fora dele mas deixa de maneira organizada supondo que o array list ja divesse doisobjetos ele iria por na ordem correta. e nesse caso e os itens de list mais um objeto 
  }

  function finalizar(id){
    const newlist = list.map( item => (item.id === id ? {...item,finished: !item.finished} : item)) // Uma '!' Esclamaçao Somente significa que vai inverter o valor atual.
    setlist(newlist)
  }

  function excluir(id){
    const newlist = list.filter( item => (item.id !== id ? true : false )) // filter remove o valor de list se o resltado dentro dele der false. filter pega item por item de list e passa para a funcao dentro dele. 
    setlist(newlist)
  }

  return ( 
    // Conteiner é uma div. pq foi configrada com nome Container. Assim como quase todas as tags usadas aqui.
    <Container> 
      <Painel>
        {/*onChange = evento de quando á uma mudançano estado*/}
        <Input onChange={inputMudou} type="text" placeholder='Digite a Tarefa'/>
        <Button onClick={click} >  Click Here </Button> 
        
        <ul>
          {
            list.length > 0 ?(
           list.map( item => (  //Todo Return So pode retornar um item.
              //<ListIcon isFinished = {item.finished}>  Cria Uma Propriedade(props) Chamada isFinished Com Valor de {item.finished}, e Armazena ela Dentro Da Variavel ListIcon.
              <ListIcon isFinished={item.finished} key={item.id}>
                <Marker onClick={() => finalizar(item.id)} /> {/*() => no onClick Faz com que  somente Quando for clicado ele retorne.*/}
                <li>{item.text}</li>{/*Precisamos por uma key para cada item 'li' Obrigatoriamente Em jsx*/}
                <Trash onClick={() => excluir(item.id)} /> {/*Esses icons sao tags*/}
              </ListIcon>
           ))
              ) : (
                <h3>Nada Aqui</h3>
              )
            }
        </ul>
      </Painel>
    </Container>
  );
}
/*const list = [vidro,cidade];  const[1,2] = list; OU seja '1' tera o valor de list 'vidro' e '2' tera valor de list 'cidade'*/
export default App;
