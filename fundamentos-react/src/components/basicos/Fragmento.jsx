import React from 'react'

export default function Fragmento(props){
  return(
    <React.Fragment key='1'>
      <h2> Fragmento</h2>
      <p> Cuidado com esse erro!</p>
    </React.Fragment>
  )
}
// para retornar sem precisar envolver por uma div, é usando o React.Fragment ou <>
// se precisar colocar mais que um atributo vai precisar do react.fragment, mas pode usar span, div...