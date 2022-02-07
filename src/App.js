import React,{Component} from "react"
import StartComponent from "./components/StartComponent"
import ImageButton from "./components/ImageButton"
import {Route} from 'react-router-dom'
import MainComponent from "./components/MainComponent"
import axios from 'axios'
class App extends Component
{
  render()
  {
    axios.get('http://127.0.0.1:1234/').then(function(response)

            {
              console.log(response.data)

            })
        
        .catch(function(error) {
            
            console.log(error);
        })
    
    
    return(
      <div>
        ax
        <Route path="/" render={(props) => <StartComponent port={8882} url={"http://127.0.0.1"}></StartComponent>} exact/>
        <Route path="/main" render={(props) => <MainComponent port={8881} url={"http://127.0.0.1"}></MainComponent>} exact/>
      </div>
    )
  }
}
export default App