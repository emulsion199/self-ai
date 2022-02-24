import {useState} from 'react'
import { Link } from 'react-router-dom'
import store from '../../index'
import { addTochatdata_input, addTochatdata_output, addVideo,setImageNum} from "../../redux_src/chat_rdx";
import { connect,useSelector } from 'react-redux'
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
    imageCard:{
        position:'relative',
        borderRight:'0.15rem solid'
      },
      image:{
        position:'relative',
        width:'100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'0%'
      },
      name:{
        fontSize:'3vw',
        fontWeight:'400',
        textAlign : 'center',
        marginTop:'2%'
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
    width:'100%',
    height:'100%',
    top:'0px',
   
    transition: 'all ease 0.2s',
    color:'white',
  },
  title:
  {
    marginTop:'50%',
    marginLeft:'10%',
    fontSize:'2vw',
    fontWeight:'bold',
  },
  desc:
  {
    marginTop:'3%',
    marginLeft:'10%',
    paddingRight:'10%',
    wordBreak:'break-all',
    lineHeight:'130%',
    fontSize:'1.2vw',
  },
  start:
  {
    marginTop:'8%',
    marginLeft:'10%',
    textAlign:'center',
    background:'rgb(200,200,200)',
    width:'80%',
    height:'7%',
    color:'black',
    paddingTop:'3%',
    fontWeight:'bold',
    fontSize:'1.1vw'
  },
  letschat_button:{
    marginTop:'8%',
    marginLeft:'10%',
    textAlign:'center',
    background:'white',
    width:'80%',
    height:'7%',
    color:'black',
    paddingTop:'3%',
    fontWeight:'bold',
    fontSize:'1.1vw'
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
        <div style={{position:'relative'
        }}>
        <div style={css.imageCard}>
            <img style = {css.image} src={require('../../image/'+num+'_temp.png').default}></img>
            <div style={css.name}>{name}</div>
          </div>
          <div style={ishover==1? css.black_hovered:css.black} onMouseOver={()=>{setishover(1)}} onMouseOut={()=>{setishover(0)}}>
            <div style={css.title}> {job} </div>
            <div style={css.desc}> {description} </div>
            <Link className="link" to={"/"+name} style={{textDecoration: 'none' }}>
              <div style={chat? css.start: css.letschat_button }
              onClick={()=>{store.dispatch(setImageNum(name))}}
              onMouseEnter={()=>{setischat(1)}}
              onMouseLeave={()=>{setischat(0)}}>
                      Let's Chat!
                  </div>
            </Link>
          </div>
          </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Card)