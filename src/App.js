import React, { useState }  from 'react';
import { setText } from './actions/index'
import './App.css';

function App(props) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  console.log(count)
  console.log(text)
  const store = props.store;
  console.log(store.dispach)
  //reduxの本を読み終えたらコーディング
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
