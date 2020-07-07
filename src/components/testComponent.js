import React from 'react';
import { connect } from "react-redux";

const TestComponent = (props) => {
  return(
    <div>
      storeの値<br></br>
      <div>{props.count}</div>
      <div>{props.text.inputValue}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer,
    text: state.textReducer
  }
}
export default connect(mapStateToProps)(TestComponent);