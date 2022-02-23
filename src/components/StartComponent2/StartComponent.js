import {useEffect,useState} from 'react'
import Welcome from './Welcome' 
import { Link } from 'react-router-dom'
import Card from './Card'
import { map } from 'lodash'
const css={
  top:{
    
    paddingBottom:'4%',
  },
  bottom:{
    borderTop:'0.15rem solid',
    position:'absolute',
    bottom:'0px',
    display:'grid',
    gridTemplateColumns: 'repeat(4,minmax(200px,25%))'
  },
}
const human=[
  {name: 'joel'},
  {name: 'changho'},
  {name: 'jaewon'},
  {name: 'dongju'}
]
const StartComponent=()=>
{
    const [ishover,setishover]= useState(0)
    const [chat, setischat] = useState(0)
    return(
      
      <div style={{

        }}>  
        <div style={css.top}>
          <Welcome></Welcome>
        </div>
        <div style = {css.bottom}>
          {human.map((h)=>{return(<Card {...h}></Card>)})}
            </div>
          </div>

    )

}
export default StartComponent