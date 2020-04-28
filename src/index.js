import React, { useState, createRef } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { useEffect } from "react"

function Example(){
  const [name, setName] = useState('')
  const [age,setAge] = useState('')

  const [nameValue, setNameValue] = useState('')
  const [ageValue, setAgeValue] = useState('')

useEffect(()=>{
  setNameValue(name)
  setAgeValue(age)
})

  return(
    <div>
      <input placeholder="name" onInput={(e)=>setName(e.target.value)}/>
      <input placeholder="age" onInput={(e)=>setAge(e.target.value)} />
      <div>{name}</div>
      <div>{age}</div>
    </div>
  )
}

// class Example extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount(){
//     document.title = `You clicked ${this.state.count} times`
//   }

//   componentDidUpdate(){
//     document.title = `You clicked ${this.state.count} times`
//   }

//   render(){
//     return(
//       <div>
//          <div>You clicked {this.state.count} times</div>
//        <button onClick={()=>this.setState({count: this.state.count+1})}>click</button>
//       </div>
//     )
//   }
// }

ReactDOM.render(<Example />, document.getElementById("root"))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
