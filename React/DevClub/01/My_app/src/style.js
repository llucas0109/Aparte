import styled from 'styled-components'

import { FcCheckmark,FcFullTrash } from "react-icons/fc"; //importando icons

//Em styled-components todos os nomes de variaveis devem ser com a primeira letra em maiusculo
// ´´ As crazes tambem sao chamadas de templates strings.
// 'Container = styled.div' Aqui Nos criamos Uma Tag Com o nome que quisermos.
export const Container = styled.div` // Devemos por a Craze  junto da div colada Para comecar a definir estilo
  background: linear-gradient(90deg,#383838 0%,#000000 81.25%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const Painel = styled.div` // Devemos por a Craze  junto da div colada
  background: #fff;
  padding: 30px 20px;
  border-radius: 5px;
  ul{
    margin-top: 60px;
  }
`
export const Input = styled.input`
  border: 2px solid black;
  border-radius: 5px;
  margin-right: 10px;
  height: 40px;
  width: 340px;
`
export const Button = styled.button`
  background-color: #8052EC;
  border-radius: 5px;
  font-weight: 900;
  font-size: 17px;
  border: none;
  color: white;
  height: 40px;
  width: 120px;
  line-height: 2px;
  cursor: pointer;
   // &: Permite usar pseudo elementos : ou ::.  
  &:hover{
    opacity: 0.8;
  }
  &:active{ //active = a click
    opacity: 0.6;
  }
`
export const ListIcon = styled.div`
  background: ${ prop => prop.isFinished ?'#E8FF88' : '#E4E4E4' }; //valor Padrao da Funçao nos permite acessar a Prop' que enviamos Para ListIcon 
  box-shadow: 1px 4px 10px rgb(0,0,0,0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px 10px;
  width: 500px;
  li{ //Podemos alterar as css tbm de filhos.
    list-style: none; //Sem As bolinha de estilo da lista
  }
`
export const Trash = styled(FcFullTrash)` //styled(FcFullTrash) Aplica estilos a icons 
  cursor: pointer;
`
export const Marker = styled(FcCheckmark)`
  cursor: pointer;
`

//estamos criando o Fundo inteiro O Painel como sendo filhos e NAO pai de 'input' e button.