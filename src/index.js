import React, { useState, createRef } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { useEffect, createContext } from "react"
import { useContext } from "react"

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light)

function Example(){
  return(
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar(props){
  return(
    <div>
      <ThemedButton />
          </div>
  )
}

function ThemedButton(){
  const theme = useContext(ThemeContext)
  return(
    <button style={{background:theme.background, color: theme.foreground}}>
      I am styled by theme context!
      <Sample />
    </button>
  )
}

function Sample(){
  const theme = useContext(ThemeContext)
  return(
    <div>
      <div>{theme.foreground}</div>
      <div>{theme.background}</div>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById("root"))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
