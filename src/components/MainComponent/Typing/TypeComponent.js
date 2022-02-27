import SendButton from "./SendButton"
import input from './input.css'
import {useState} from 'react'
import axios from "axios"
import font from '../../font.css'

const TypeComponent=()=>
{
    const [ins, setins] = useState();
    const sendMessage=()=>
{
    //axios.post()
    setins("")

}

    return(
        
        <div
        style={{
            position:'absolute',
            bottom:'4vh',
            right:'2.5vw',
            display:'grid',
            gridTemplateColumns:'1fr 0.2fr',
            borderBottom:'1px solid white',
            width:'19vw',
            height:'5vh',
            paddingLeft:'0.5vw',
            color:'white',
        }}>
            <input 
            onKeyPress={(e)=>{if(e.key=='Enter'){sendMessage()}}}
            onChange={(e)=>{setins(e.target.value)}}
            value={ins}
            placeholder='Type Something'
            className="input" style={{
                fontFamily:'Roboto',
                backgroundColor:'rgba(0,0,0,0)',
                border:'0px solid black',
                color:'white',
                fontSize:'1.2vw',
            }}>
            </input>
        </div>
    )
}
export default TypeComponent