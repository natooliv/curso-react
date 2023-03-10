import React from 'react'
import './App.css';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';
// import Comp from './components/basicos/Primeiro'; iria funcionar normalmente
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/basicos/Repetição/ListaAlunos';
import TabelaProdutos from './components/basicos/Repetição/TabelaProdutos';
// eslint-disable-next-line no-unused-expressions
export default () => (
  <div className='App'>
    <h1>Fundamentos React</h1>
    <div className='Cards'>

    <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

      <Card titulo='#06-Repetição' color='#FF4C65'>
      <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo='#05-Componentes com Filhos' color='#00C8F8'>
        <Familia sobrenome='Ferreira'>

          <FamiliaMembro nome='Pedro' />
          <FamiliaMembro nome='Ana' />
          <FamiliaMembro nome='Gustavo' />

        </Familia>
      </Card>
      <Card titulo='#04-Desafio Aleatório' color='#FA6900'>
        <Aleatorio min={10} max={60} />
      </Card>

      <Card titulo='#03-Fragmento' color='#E94C6F'>
        <Fragmento />
      </Card>

      <Card titulo='#02-Com parametro' color='#E8B71A'>
        <ComParametro
          titulo="-Situação do aluno"
          aluno="Pedro " nota='9.3' />
      </Card>

      <Card titulo='#01-Primeiro' color='#588C73'>
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
