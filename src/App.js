import React, { useState }  from 'react';
import { increment, decrement } from './actions/conterAction'
import { setText } from './actions/index'
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  const [text, setText] = useState('')
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
  console.log(state)
  return {
    count: state.counterReducer,
    text: state.textReducer
  }
}
const mapDispatchtoProps = (dispach) => {
  return {
    increment: () => dispach(increment()),
    decrement: () => dispach(decrement()),
    setText: (text) => dispach(setText(text))
  }
}
export default connect(mapStateToProps,mapDispatchtoProps)(App);
