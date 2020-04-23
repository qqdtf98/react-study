import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

function MoneyCalculator(props) {
  const name = props.name
  const money = name === "sung" ? props.money * 0.6 : props.money * 0.4
  return (
    <div>
      {name} : {money} 원
    </div>
  )
}

const CalCulator = () => {
  const [state, setState] = useState({
    total: 0,
  })

  function setMoney(e) {
    setState({
      total: Number(e.target.value),
    })
  }

  return (
    <div>
      <input value={state.total} onChange={setMoney} />
      <MoneyCalculator name="sung" money={state.total} />
      <MoneyCalculator name="min" money={state.total} />
    </div>
  )
}

ReactDOM.render(<CalCulator />, document.getElementById("root"))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
