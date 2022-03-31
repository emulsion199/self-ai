import { connect,useSelector } from 'react-redux'
import store from '../..';
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum,isrecord } from "../../redux_src/chat_rdx";
import { useState } from 'react';
import '../font.css';
import { useMediaQuery } from 'react-responsive'
const mapStateToProps = state => ({
    chat: state.chat,
    video: state.video,
    image: state.image,
    recording: state.recording
  });
  
const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
    setImageNum,
    isrecord
  };



const CCButton=()=>
{
    const handleMediaQueryChange = (matches) => { }
    const Pc = useMediaQuery(
        { minWidth: 1024 }, undefined, handleMediaQueryChange
      );
      const Mobile = useMediaQuery(
        { maxWidth: 1024 }, undefined, handleMediaQueryChange
      );
    var loading=null
    const [clicked,setclicked]=useState(1)
    const chat= store.getState()['chat']
    const record = store.getState()['recording']
    const tx=Pc?'-25%':'-50%'
    const tx2=Pc?'25%':'50%'
    const fs=Pc?'1.4vw':'3vw'
    console.log(record)
    if(store.getState()['recording']==1)
    {
        loading=
            <div style={{
                position:'absolute',
                width:'50%',
                bottom:'20px',
                left: tx2,
                transform: 'translateX('+tx+')',
                opacity:clicked,
                textAlign:'center',
                height:'auto',
                background:'rgba(0,0,0,0.7)',
                color:'white',
                fontSize:'20px',
                fontFamily:'Poppins',
                paddingLeft:'10px',
                paddingRight:'10px',
                wordBreak:'break-word'
            }}>
                {chat}
            </div>
    }
    else{
        loading= <div style={{position:'absolute', top:'10vh', left:'37.5vw'}} className='loader'></div>
    }
    return(
        <div>
        <div onClick={()=>{clicked? setclicked(0): setclicked(1)
        console.log(record)}}
        style={{
            position:'absolute',
            bottom:'-10px',
            left:'10px',
            width:'50px',
            height:'50px',
            marginBottom:'4vh', 
            background:'rgba(0,0,0,0.7)',
            textAlign:'center',
            color:'white',
        }}>
            <div style={{
                opacity: clicked+0.6,
                paddingTop:'24%',
                paddingLeft:'2%'
            }}>
                <img src={require('../../image/caption.png').default}></img>
            </div>
            
        </div>
        {loading}
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(CCButton)