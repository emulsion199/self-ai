import { connect,useSelector } from 'react-redux'
import store from '../..';
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum } from "../../redux_src/chat_rdx";
import { useState } from 'react';
const mapStateToProps = state => ({
    chat: state.chat,
    video: state.video,
    image: state.image
  });
  
const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
    setImageNum,
  };
const CCButton=()=>
{
    const [clicked,setclicked]=useState(1)
    const chat= store.getState()['chat']
    return(
        <div>
        <div onClick={()=>{clicked? setclicked(0): setclicked(1)}}
        style={{
            position:'absolute',
            bottom:'20px',
            left:'20px',
            width:'50px',
            height:'50px',
            background:'rgba(0,0,0,0.7)',
            textAlign:'center',
            color:'white',
        }}>
            <div style={{
                opacity: clicked+0.6,
                paddingTop:'15px',
            }}>
                CC
            </div>
            
        </div>
        <div style={{
            position:'absolute',
            bottom:'20px',
            opacity:clicked,
            left:500-chat.length*5.5+'px',
            width:'auto',
            height:'50px',
            background:'rgba(0,0,0,0.7)',
            color:'white',
            fontSize:'30px',
        }}>
            <div
            style={{
                paddingLeft:'10px',
                marginRight:'10px',
                paddingTop:'5px',
            }}>
            {chat}
            </div>
            
            </div>
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(CCButton)