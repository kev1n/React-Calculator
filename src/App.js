import "./styles.css";
import React, {useState} from 'react'
import * as TiIcons from "react-icons/ti";

export default function App() {

  const [state, setState] = useState({
    input: "",
  })

  const clear = () => {
    setState({
      input: ""
    })
  }

  const backspace = () => {
    setState({
      input: state.input.substring(0, state.input.length-1)
    })
  }

  const onInput = (input) => {
    let inputIsOperation = "+-/*%.".includes(input)
    let lastInputIsOperation = "=-/*%.".includes(state.input[state.input.length-1])
    if (inputIsOperation && lastInputIsOperation) {
      setState({
        input: state.input.substring(0, state.input.length-1) + input.toString()
      })
    } else if (state.input === "" && inputIsOperation){
      return false;
    } else {
      setState({
        input: state.input + input.toString()
      })
    }

  }
  const evaluate = () => {
    let lastInputIsOperation = "=-/*%.".includes(state.input[state.input.length-1])
    if (!lastInputIsOperation) {
      const expression = eval(state.input)
      setState({
        input: expression
      })
    }
  }

  return (
    <div className="App">
      <div className="center">
        <div className="grid-container rounded">
          <div className="big darkblue"><span className="input">{state.input ? state.input : 0}</span></div>
          <div className="grid-item gray" onClick={clear}>C</div>
          <div className="grid-item gray">+/-</div>
          <div className="grid-item gray" onClick = {() => onInput("%")}>%</div>
          <div className="grid-item orange" onClick = {() => onInput("/")}>/</div>
          <div className="grid-item white" onClick = {() => onInput(7)}>7</div>
          <div className="grid-item white" onClick = {() => onInput(8)}>8</div>
          <div className="grid-item white" onClick = {() => onInput(9)}>9</div>
          <div className="grid-item orange" onClick = {() => onInput("*")}>x</div>
          <div className="grid-item white" onClick = {() => onInput(4)}>4</div>
          <div className="grid-item white" onClick = {() => onInput(5)}>5</div>
          <div className="grid-item white" onClick = {() => onInput(6)}>6</div>
          <div className="grid-item orange" onClick = {() => onInput("-")}>-</div>
          <div className="grid-item white" onClick = {() => onInput(3)}>3</div>
          <div className="grid-item white" onClick = {() => onInput(2)}>2</div>
          <div className="grid-item white" onClick = {() => onInput(1)}>1</div>
          <div className="grid-item orange" onClick = {() => onInput("+")}>+</div>
          <div className="grid-item white" onClick = {() => onInput(0)}>0</div>
          <div className="grid-item white" onClick = {() => onInput(".")}>.</div>
          <div className="grid-item white" onClick = {backspace}>
            <TiIcons.TiBackspaceOutline />
          </div>
          <div className="grid-item dark-orange" onClick = {() => evaluate()}>=</div>
        </div>
      </div>
    </div>
  );
}
