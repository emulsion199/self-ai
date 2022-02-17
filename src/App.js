import React,{Component} from "react"
import StartComponent from "./components/StartComponent/StartComponent"
import {Route} from 'react-router-dom'
import MainComponent from "./components/MainComponent/MainComponent"
const App=()=>
{

    return(
      <div>
        <Route path="/" render={(props) => <StartComponent port={8883} url={"https://self-ai.org"}></StartComponent>} exact/>
        <Route path="/main" render={(props) => <MainComponent port={8882} url={"https://self-ai.org"}></MainComponent>} exact/>
      </div>
    )
  
}
export default App