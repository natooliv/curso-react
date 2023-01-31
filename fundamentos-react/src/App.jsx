import React from 'react'
import './App.css';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';
// import Comp from './components/basicos/Primeiro'; iria funcionar normalmente
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';
// eslint-disable-next-line no-unused-expressions
export default () => (
  <div className='App'>
    <h1>Fundamentos React</h1>
    <div className='Cards'>

      <Card titulo='#05-Desafio Aleatório' color='#FA6900'>
        <Aleatorio min={10} max={60} />
      </Card>

      <Card titulo='#04-Fragmento'color='#E94C6F'>
        <Fragmento />
      </Card>

      <Card titulo='#03-Com parametro'color='#E8B71A'>
        <ComParametro
          titulo="#02-Situação do aluno"
          aluno="Pedro " nota='9.3' />
      </Card>

      <Card titulo='#01-Primeiro'color='#588C73'>
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
