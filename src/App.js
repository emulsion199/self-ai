import React,{Component} from "react"
//import StartComponent from "./components/StartComponent/StartComponent"
import StartComponent from "./components/StartComponent2/StartComponent"
import {Route} from 'react-router-dom'
import MainComponent from "./components/MainComponent/MainComponent"
const App=()=>
{

    return(
      <div>
        <Route path="/" render={(props) => <StartComponent port={8883} url={"https://self-ai.net"}></StartComponent>} exact/>
        <Route path="/joel" render={(props) => <MainComponent port={8882} url={"https://self-ai.net"}></MainComponent>} exact/>
        <Route path="/changho" render={(props) => <MainComponent port={8882} url={"https://self-ai.net"}></MainComponent>} exact/>
        <Route path="/jaewon" render={(props) => <MainComponent port={8882} url={"https://self-ai.net"}></MainComponent>} exact/>
        <Route path="/dongju" render={(props) => <MainComponent port={8882} url={"https://self-ai.net"}></MainComponent>} exact/>
      </div>
    )
  
}
export default App