import React, { useState }  from 'react';
import { increment, decrement } from './actions/conterAction'
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  //console.log(count)
  //console.log(text)
  //const store = props.store;
  //console.log(store.dispach)
  //reduxの本を読み終えたらコーディング
  return (
    <div className="App">
      Clicked: {props.count} times.<br></br>
      <button onClick={props.increment}>
        +1
      </button>
      <button onClick={props.decrement}>
        -1
      </button>
      <br></br>
      <br></br>
      Input text: {text}<br></br>
      <input onChange={(e) => setText(e.target.value)}></input>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}
const mapDispatchtoProps = (dispach) => {
  return {
    increment: () => dispach(increment()),
    decrement: () => dispach(decrement())
  }
}
export default connect(mapStateToProps,mapDispatchtoProps)(App);
