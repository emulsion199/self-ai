import {useEffect,useState} from 'react'
import Welcome from './Welcome' 
import { Link } from 'react-router-dom'
const css={
  top:{
    borderBottom:'0.15rem solid',
    paddingBottom:'4%',
  },
  bottom:{
    display:'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  imageCard:{
    position:'relative',
    borderRight:'0.15rem solid'
  },
  image:{
    position:'relative',
    width:'90%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'10%'
  },
  name:{
    fontSize:'300%',
    fontWeight:'400',
    textAlign : 'center',
    marginTop:'4%'
  },
  black:
  {
    position:'relative',
    background:'rgba(0,0,0,0)',
    opacity:'0',
    width:'100%',
    height:'452px',
    marginTop:'-452px',
    transition: 'all ease 0.2s',
    color:'white',

  },
  black_hovered:
  {
    position:'relative',
    background:'rgba(0,0,0,0.7)',
    width:'100%',
    height:'452px',
    marginTop:'-452px',
    transition: 'all ease 0.2s',
    color:'white',
  },
  title:
  {
    marginTop:'60%',
    marginLeft:'10%',
    fontSize:'150%',
    fontWeight:'bold',
  },
  desc:
  {
    marginTop:'3%',
    marginLeft:'10%',
    paddingRight:'10%',
    wordBreak:'break-all',
    lineHeight:'130%'
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
    paddingTop:'3%',
    fontWeight:'bold',
    fontSize:'100%'
  }
}
const StartComponent=()=>
{
    const [ishover,setishover]= useState(0)
    const [chat, setischat] = useState(0)
    return(
      
      <div style={{
        height:'100%',
        overflowY:'hidden',
        display:'grid',
        gridTemplateRows: '1fr 2fr',
        position:'absolute'
        }}>  
        <div style={css.top}>
          <Welcome></Welcome>
        </div>
        <div style={{display:'grid', gridTemplateRows:'1fr 1fr'}}>
        <div style = {css.bottom}>
          <div style={css.imageCard}>
            <img style = {css.image} src={require('../../image/1_temp.png').default}></img>
            <div style={css.name}>Joel</div>
          </div>
          <div style={css.imageCard}>
            <img style = {css.image} src={require('../../image/2_temp.png').default}></img>
            <div style={css.name}>Changho</div>
          </div>
          <div style={css.imageCard}>
            <img style = {css.image} src={require('../../image/3_temp.png').default}></img>
            <div style={css.name}>Jaewon</div>
          </div>
          <div>
            <img style = {css.image} src={require('../../image/4_temp.png').default}></img>
            <div style={css.name}>Dongju</div>
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
          <div style={ishover==2? css.black_hovered:css.black} onMouseOver={()=>{setishover(2)}}onMouseOut={()=>{setishover(0)}}>
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
          <div style={ishover==3? css.black_hovered:css.black} onMouseOver={()=>{setishover(3)}}onMouseOut={()=>{setishover(0)}}>
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
            <div style = {ishover==4? css.black_hovered:css.black} onMouseOver={()=>{setishover(4)}}onMouseOut={()=>{setishover(0)}}>
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
        </div>
      </div>
    )

}
export default StartComponent