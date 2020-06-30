import React, { useState }  from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  console.log(count)
  console.log(text)
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input onChange={(e) => setText(e.target.value)}></input>
    </div>
  );
}

export default App;
