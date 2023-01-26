import './index.css' // importação relativo.
import ReactDOM from'react-dom';// esse nome é o que você acha de  boa pratica que será estudado logo a frente
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
// import Comp from './components/basicos/Primeiro'; iria funcionar normalmente
import ComParametro from './components/basicos/ComParametro';

ReactDOM.render(
  <div> 
    <Primeiro></Primeiro>
    <ComParametro titulo ="Situação do aluno"
    aluno ="Pedro " nota ='9.3'/>
    </div>,
  document.getElementById('root'));

// Trabalhando o JSX de forma fluída.
