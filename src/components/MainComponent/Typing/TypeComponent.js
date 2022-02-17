import SendButton from "./SendButton"
import input from './input.css'
const TypeComponent=()=>
{
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
            <input placeholder='Type Something'
            className="input" style={{
                backgroundColor:'rgba(0,0,0,0)',
                border:'0px solid black',
                color:'white',
                fontSize:'20px',
            }}>
            </input>
            <SendButton></SendButton>
     
        </div>
    )
}
export default TypeComponent