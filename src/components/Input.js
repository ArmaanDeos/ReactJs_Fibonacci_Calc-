import React from 'react';
import { useState } from 'react';
import Header from '../Header';

const Input = () => {

  const [num1, setNum1] = useState(0);

  const [num2, setNum2] = useState(1);

  const [range, setRange] = useState(0);

  const [data, setData] = useState([]);


  function fibonacci(nums) {
    let data = [];

    let fib = [num1, num2];

    for (let i = 2; i <= nums; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
      data.push(fib[i]);
    }

    return data;
  }

  // console.log(range)
  return (
    <>
    <Header/>

    <div className="container">
      <h1>Fibonacci's Series Generated</h1>
      <label htmlFor="number1" >Number 1 : </label>  &nbsp;&nbsp;
      <input type="text" id='number1' onChange={(e) => { setNum1(Number(e.target.value)) }} />
      &nbsp;&nbsp;
      <label htmlFor="number2">Number 2 : </label>  &nbsp;&nbsp;
      <input type="text" id='number2' onChange={(e) => { setNum2(Number(e.target.value)) }} />
      <br />

      <hr />
      <label htmlFor="points">Range : {range}</label>
      <input type="range" id="points" name="points" min="0" max="100" onChange={(e) =>{setRange(Number(e.target.value))}}/>
 <br /><hr />
      &nbsp;&nbsp;<button className="btn btn-primary" onClick={() => setData(fibonacci(range+1))}>Generate</button>
      <h3>Fibonacci's Series  :</h3>
      {
        data.map((data, i) =>
          <p key={i}>index {i}:  {data}</p>
        )
      }
    </div>
    </>
  )
}

export default Input;