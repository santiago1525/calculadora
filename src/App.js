import './App.css';
import logo from './images/logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Imagen from './componentes/Imagen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const borrarInput = () => {
    setInput('');
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    }
    else {
      alert('Por favor ingrese dos o más valores para realizar los cálculos')
    }
  };

  return (
    <div className='App'>
      <Imagen 
        logo={logo}/>
      <div className='contenedor-calculadora'>
        <Pantalla  input={input}/>
        <div className='fila'>
          <Boton clic={agregarInput}>^</Boton>
          <Boton clic={agregarInput}>/</Boton>

          <Boton clic={agregarInput}>(</Boton>
          <Boton clic={agregarInput}>)</Boton>
        </div>
        <div className='fila'>
          <Boton clic={agregarInput}>1</Boton>
          <Boton clic={agregarInput}>2</Boton>
          <Boton clic={agregarInput}>3</Boton>
          <Boton clic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton clic={agregarInput}>4</Boton>
          <Boton clic={agregarInput}>5</Boton>
          <Boton clic={agregarInput}>6</Boton>
          <Boton clic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton clic={agregarInput}>7</Boton>
          <Boton clic={agregarInput}>8</Boton>
          <Boton clic={agregarInput}>9</Boton>
          <Boton clic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton clic={agregarInput}>.</Boton>
          <Boton clic={agregarInput}>0</Boton>
          <Boton clic={calcularResultado}>=</Boton>
        </div>
        <div className='fila'>
          <BotonClear clic={borrarInput}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
