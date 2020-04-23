import React, { useState, ChangeEvent } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

// function MoneyCalculator(props) {
//     const name = props.name
//     const money = name === 'sung' ? props.money * 0.6 : props.money * 0.4
//     return (
//         <div>
//             {name} : {money} 원
//         </div>
//     )
// }

type MoneyCalculatorProps = {
  name: string
  money: number
}

const MoneyCalculator: React.FC<MoneyCalculatorProps> = (props) => {
  const name = props.name
  const money = name === "sung" ? props.money * 0.6 : props.money * 0.4
  return (
    <div>
      {name} : {money} 원
    </div>
  )
}

// class CalCulator extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { total: 0 }
//     this.setMoney = this.setMoney.bind(this)
//   }

//   setMoney(e) {
//     this.setState({ total: e.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <input value={this.state.total} onChange={this.setMoney} />
//         <MoneyCalculator name="sung" money={this.state.total} />
//         <MoneyCalculator name="min" money={this.state.total} />
//       </div>
//     )
//   }
// }

const CalCulator: React.FC = () => {
  const [state, setState] = useState({
    total: 0,
  })

  function setMoney(e: ChangeEvent<HTMLInputElement>) {
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
