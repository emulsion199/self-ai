import {useEffect,useState} from 'react'
import Welcome from './Welcome' 
import { Link } from 'react-router-dom'
import Card from './Card'
import { map } from 'lodash'
const css={
  top:{
    position:'absolute',
    paddingBottom:'5%'
  },
  bottom:{
    borderTop:'0.15rem solid',
    position:'absolute',
    background:'rgba(255,255,255,0.3)',
    bottom:'0px',
    height:'60%',
    display:'grid',
    gridTemplateColumns: 'repeat(4,minmax(200px,25%))'
  },
  image:{
    position:'absolute',
    height:'100vh',
    width:'100vw'
  },
}
const human=[
  {name: ['JOEL', '1', 'PM, AI Developer', 'I am a M.S. & Ph.D. (Integrated) student at the Language & Knowledge Lab at KAIST, advised by Minjoon Seo interested in NLP and ML research. Currently, I am focused on temporal adaptation of large language models.']},
  {name: ['CHANGHO', '2', 'Back-end Developer', 'I am self-motivated and passionate computer programmer! These days, my interest is in AI modeling and AI researching.']},
  {name: ['JAEWON', '3', 'Front-end Developer', 'Educated in computer science at Korea University. I am studying with the aim of ai model and full stack developer.']},
  {name: ['DONGJU', '4', 'UI/UX Designer', 'I majored design in university.. enim velit duis enim ollivelit molli veli. lit non deserunt lvelit duis enim.']}
                                            
]
const StartComponent=()=>
{
    const [ishover,setishover]= useState(0)
    const [chat, setischat] = useState(0)
    return(
      
      <div style={css.bg}>  
        <img style = {css.image} src={require('../../image/background.png').default}></img>
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