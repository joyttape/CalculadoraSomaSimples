import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0 ) {
      alert('Por favor, insira números válidos');
      return;
    }
    setResultado(n1 + n2);
  };

  const limpar = () => {
    setNum1('');
    setNum2('');
    setResultado(null);
  };

  return (
    <div className="container">
      <h1>Calculadora de Soma</h1>
      <input
        className="input"
        type="number"
        placeholder="Digite o primeiro número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Digite o segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className='botoes'>
        <button onClick={somar} className="button">Somar</button>
        <button onClick={limpar} className="button limpar">Limpar</button>
      </div>
      
      {resultado !== null && (
        <p className="resultado">Resultado: {resultado}</p>
      )}
      <div>
        <h1>João Pedro Gundim Guimarães ADS</h1>
      </div>
    </div>
  );
}




