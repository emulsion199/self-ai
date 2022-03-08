import { useEffect, useState } from 'react'
import Welcome from './Welcome'
import { Link } from 'react-router-dom'
import Card from './Card'
import { map } from 'lodash'
import font from '../font.css'
import { useMediaQuery } from 'react-responsive'




const css = {
  top: {
    position: 'absolute',
    paddingBottom: '5%'
  },
  bottom: {
    borderTop: '0.15rem solid',
    position: 'absolute',
    background: 'rgba(255,255,255,0.3)',
    bottom: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    width: '100vw',
  },
  bottom_m: {
    borderTop: '0.15rem solid',
    position: 'absolute',
    background: 'rgba(255,255,255,0.3)',
    bottom: '0px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    height: '60vh',
    width: '100vw',
  },
  image: {
    position: 'absolute',
    height: '100vh',
    width: '100vw'
  },
}
const human = [
  { name: ['JOEL', '1', 'PM, AI Developer', 'I am a M.S. & Ph.D. (Integrated) student at the Language & Knowledge Lab at KAIST, advised by Minjoon Seo interested in NLP and ML research. Currently, I am focused on temporal adaptation of large language models.'] },
  { name: ['CHANGHO', '2', 'Back-end Developer', 'I am self-motivated and passionate computer programmer! These days, my interest is in AI modeling and AI researching.'] },
  { name: ['JAEWON', '3', 'Front-end Developer', 'Educated in computer science at Korea University. I am studying with the aim of ai model and full stack developer.'] },
  { name: ['DONGJU', '4', 'UI/UX Designer', 'I am a product designer who is passionate about solving problems through data analysis and creative ideas. Let’s have a chat!'] }

]
const StartComponent = () => {
  const [ishover, setishover] = useState(0)
  const [chat, setischat] = useState(0)
  const handleMediaQueryChange = (matches) => { }
  const Pc = useMediaQuery(
    { minWidth: 1024 }, undefined, handleMediaQueryChange
  );
  const Mobile = useMediaQuery(
    { maxWidth: 1024 }, undefined, handleMediaQueryChange
  );

  return (

    <div style={css.bg}>
      <img style={css.image} src={require('../../image/background.png').default}></img>
      <div style={css.top}>
        <Welcome></Welcome>
      </div>
      {Pc && <div style={css.bottom}>
        {human.map((h) => { return (<Card {...h}></Card>) })}
      </div>}
      {Mobile && <div style={css.bottom_m}>
        {human.map((h) => { return (<Card {...h}></Card>) })}
      </div>}
    </div>

  )

}
export default StartComponent