import React from'react'
export default function ComParametro (props) {

  return(
    <div>
      <h2>{props.titulo}</h2> 
      <h3>{props.aluno} tem a nota {props.nota}</h3>
    </div>
  )
}
// via de regra nao usa-se o parametro(params) , usa-se props(propriedades);
// cria o component, e pode ser usado quantas vezes forem necessárias;
// as props são somente leitura 
