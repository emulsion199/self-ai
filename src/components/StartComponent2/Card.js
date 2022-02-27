import {useState} from 'react'
import { Link } from 'react-router-dom'
import store from '../../index'
import { addTochatdata_input, addTochatdata_output, addVideo,setImageNum} from "../../redux_src/chat_rdx";
import { connect,useSelector } from 'react-redux'
import font from '../font.css'
import axios from 'axios'
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
const css=
{

    image:{
        position:'absoolute',
        width:'80%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop:'10%'
    },
    name:{
        fontFamily:'Roboto',
        fontSize:'2.7vw',
        fontWeight:'400',
        textAlign : 'center',
        marginTop:'5vh',
    },
    nothing:{
      opacity:'0%'
    },
    black:
    {
      position:'absolute',
      background:'rgba(0,0,0,0)',
      opacity:'0',
      width:'100%',
      height:'100%',
      top:'0px',
      transition: 'all ease 0.2s',
      color:'white',
    },
    black_hovered:
    {
      position:'absolute',
      background:'rgba(0,0,0,0.7)',
      width:'100.5%',
      height:'100%',
      top:'0px',
    
      transition: 'all ease 0.2s',
      color:'white',
    },
    box:
    {
      position:'absolute',
      bottom:'14vh',
    },
    title:
    {
      fontFamily:'Roboto bold',
      marginLeft:'10%',
      marginBottom:'5%',
      fontSize:'2vw',
      fontWeight:'bold',
    },
    desc:
    {
      fontFamily:'Roboto',
      marginTop:'3%',
      marginLeft:'10%',
      paddingRight:'10%',
      wordBreak:'keep-all',
      lineHeight:'130%',
      fontSize:'1.2vw',
    },
    start:
    {
      fontFamily:'Roboto bold',
      position:'absolute', 
      borderRadius:'6px',
      bottom:'4vh',
      marginTop:'8%',
      marginLeft:'10%',
      textAlign:'center',
      lineHeight:'3vh',
      background:'rgb(200,200,200)',
      width:'80%',
      height:'7%',
      color:'black',
      paddingTop:'3%',
      fontWeight:'bold',
      fontSize:'1.2vw'
    },
    letschat_button:{
      fontFamily:'Roboto bold',
      position:'absolute', 
      lineHeight:'3vh',
      borderRadius:'6px',
      bottom:'4vh',
      marginTop:'8%',
      marginLeft:'10%',
      textAlign:'center',
      background:'white',
      width:'80%',
      height:'7%',
      color:'black',
      paddingTop:'3%',
      fontWeight:'bold',
      fontSize:'1.2vw'
    },
}
const Card=(args)=>
{
    const [ishover,setishover]= useState(0)
    const [chat, setischat] = useState(0)
    const name = args.name[0]
    const num = args.name[1]
    const job = args.name[2]
    const description = args.name[3]
    return(
        <div style={{position:'relative', borderRight:'0.18rem solid'}}>
            <img style = {css.image} src={require('../../image/'+num+'_temp.png').default}></img>
            <div style={ishover==0? css.name : css.nothing}>{name}</div>
          <div style={ishover==1? css.black_hovered:css.black} onMouseOver={()=>{setishover(1)}} onMouseOut={()=>{setishover(0)}}>
            <div style={css.box}>
            <div style={css.title}> {job} </div>
            <div style={css.desc}> {description} </div>
            </div>
            <Link className="link" to={"/"+name} style={{textDecoration: 'none' }}>
              <div style={chat? css.start: css.letschat_button }
              onClick={()=>{store.dispatch(setImageNum(name))
               }}
              onMouseEnter={()=>{setischat(1)}}
              onMouseLeave={()=>{setischat(0)}}>
                      LET'S CHAT
                  </div>
            </Link>
          </div>
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Card)