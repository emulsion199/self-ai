import {useState} from 'react'
import { Link } from 'react-router-dom'
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
    paddingTop:'1%',
    fontWeight:'bold',
    fontSize:'100%'
  },
  letschat_button:{
    marginTop:'8%',
    marginLeft:'10%',
    textAlign:'center',
    background:'white',
    width:'80%',
    height:'7%',
    color:'black',
    paddingTop:'5%',
    fontWeight:'bold',
    fontSize:'100%'
  },
}
const Card=(args)=>
{
    const [ishover,setishover]= useState(0)
    const [chat, setischat] = useState(0)
    const name=args.name
    return(
        <div style={{position:'relative'
        }}>
        <div style={css.imageCard}>
            <img style = {css.image} src={require('../../image/1_temp.png').default}></img>
            <div style={css.name}>{name}</div>
          </div>
          <div style={ishover==1? css.black_hovered:css.black} onMouseOver={()=>{setishover(1)}} onMouseOut={()=>{setishover(0)}}>
            <div style={css.title}> Front-end developer </div>
            <div style={css.desc}> enim velit duis enim velit duis enim velit mollit velit ollivelit molli veli. lit non deserunt lor do amet enim velit duis enim velienim velit duis enim.</div>
            <Link className="link" to="/main" style={{textDecoration: 'none' }}>
              <div style={chat? css.start: css.letschat_button }
              onMouseEnter={()=>{setischat(1)}}
              onMouseLeave={()=>{setischat(0)}}>
                      Let's Chat!
                  </div>
            </Link>
          </div>
          </div>
    )
}
export default Card