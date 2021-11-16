import React,{Component} from "react"
import StartComponent from "./components/StartComponent"
import ImageButton from "./components/ImageButton"
import {Route} from 'react-router-dom'
import MainComponent from "./components/MainComponent"
class App extends Component
{
  render()
  {
    return(
      <div>
        <Route path="/" component={StartComponent} exact/>
        <Route path="/main" component={MainComponent} exact/>
       
 
      </div>
    )
  }
}
export default App