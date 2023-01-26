import React from 'react'
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';
// import Comp from './components/basicos/Primeiro'; iria funcionar normalmente
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

 // eslint-disable-next-line no-unused-expressions
 export default () => (
  <div id='app'>
    <h1>Fundamentos React</h1>
    <Aleatorio  min={10} max ={60}/>
    <Fragmento />
    <ComParametro
      titulo="Situação do aluno"
      aluno="Pedro " nota='9.3' />
    <Primeiro></Primeiro>
  </div>
);
