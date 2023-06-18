import React, { useState } from 'react';
import './App.css';

function App() {
  var res = document.getElementById("res");
  var screen1 = document.getElementById("screen1");
  var Done = document.getElementById("Done");
  const [inputValue, setInputValue] = useState("");
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));


  function Check() {
    var sum = parseInt(num1) + parseInt(num2);
    if (parseInt(res.value) === sum) {
      screen1.style.backgroundColor = "green";
      Done.style.display = "none";
      setTimeout(() => {
        Done.style.display = "block";
        Change();
      }, 1000); // Hẹn giờ 1 giây (1000 milliseconds) trước khi thực hiện hành động Change()
    } else {
      screen1.style.backgroundColor = "red";
      Done.style.display = "none";
      setTimeout(() => {
        Change();
        Done.style.display = "block";
      }, 1000); // Hẹn giờ 1 giây (1000 milliseconds) trước khi thực hiện hành động Change()
    }
  }

  function Change() {
    screen1.style.backgroundColor = "rgb(117, 117, 239)";
    setInputValue("");
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }

  return (
    <div>
      <div className="navBar">
        <h1>M-ETH</h1>
        <div className="token" id="tokenCurrent">
          <p>Current: <b>Token</b></p>
        </div>
        <div className="user">
          <p><b>User Name</b></p>
        </div>
      </div>
      <div className="main">
        <div className="screen1" id="screen1">
          <div className="num" id="num1">{num1}</div>
          <div className="num">+</div>
          <div className="num" id="num2">{num2}</div>
          <div className="num">=</div>
          <div className="num">
            <input id="res" type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>
        </div>
        <div className="screen2">
          <button onClick={() => { Check(); }} id="Done">Done</button>
        </div>
      </div>
    </div>
  );
}

export default App;





