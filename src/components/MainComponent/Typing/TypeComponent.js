import SendButton from "./SendButton"
import input from './input.css'
import {useState} from 'react'
import axios from "axios"


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
            display:'grid',
            gridTemplateColumns:'1fr 0.2fr',
            marginLeft:'25px',
            background:'rgba(0,0,0,0.5)',
            width:'300px',
            height:'50px',
            border: '0px solid black',
            borderRadius: '100px',
            paddingLeft:'20px',
            color:'white'
        }}>
            <input 
            onKeyPress={(e)=>{if(e.key=='Enter'){sendMessage()}}}
            onChange={(e)=>{setins(e.target.value)}}
            value={ins}
            placeholder='Type Something'
            className="input" style={{
                backgroundColor:'rgba(0,0,0,0)',
                border:'0px solid black',
                color:'white',
                fontSize:'20px',
            }}>
            </input>
            
            <div 
            onClick={sendMessage}
            style={{
            marginTop:'15px',
            marginRight:'20px',   
        }}>
            SEND
        </div>
     
        </div>
    )
}
export default TypeComponent