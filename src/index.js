import React, { useState, createRef } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  focusTextInput = () => {
    this.inputRef.current.focus()
  }
  printTextValue = () => {
    console.log(this.inputRef.current.value)
  }
  render() {
    return <input type="text" ref={this.inputRef} />
  }
}

class AutoFocusText extends React.Component {
  constructor(props) {
    super(props)
    this.textRef = React.createRef()
    this.printText = this.printText.bind(this)
  }

  componentDidMount() {
    console.log(this.textRef.current.state)
    this.textRef.current.focusTextInput()
  }

  printText() {
    this.textRef.current.printTextValue()
  }

  render() {
    return (
      <div>
        <CustomTextInput ref={this.textRef} />
        <button onClick={this.printText}>click </button>
      </div>
    )
  }
}
ReactDOM.render(<AutoFocusText />, document.getElementById("root"))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
