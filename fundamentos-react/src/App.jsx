import React from 'react'
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';
// import Comp from './components/basicos/Primeiro'; iria funcionar normalmente
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';
// eslint-disable-next-line no-unused-expressions
export default () => (
  <div id='app'>
    <h1>Fundamentos React</h1>
    <Card titulo='#05-Desafio Aleatório'>
      <Aleatorio min={10} max={60} />
    </Card>
    <Card titulo='#04-Fragmento'>
      <Fragmento />
    </Card>
    <Card titulo='#03-Com parametro'>
      <ComParametro
        titulo="#02-Situação do aluno"
        aluno="Pedro " nota='9.3' />
    </Card>
    <Card titulo='#01-Primeiro'>
      <Primeiro></Primeiro>
    </Card>

  </div>
);
