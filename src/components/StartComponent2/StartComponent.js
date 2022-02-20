import {useEffect,useState} from 'react'
import Welcome from './Welcome' 

const css={
  top:{
    borderBottom:'0.15rem solid',
    paddingBottom:'4%'
  },
  bottom:{
    display:'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  imageCard:{
    borderRight:'0.15rem solid'
  },
  image:{
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
  }
}
const StartComponent=()=>
{
    return(
      
      <div style={{
        height:'100%',
        overflowY:'hidden',
        display:'grid',
        gridTemplateRows: '1fr 2fr',
        }}>  
        <div style={css.top}>
          <Welcome></Welcome>
        </div>
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
        </div>
      </div>
    )

}
export default StartComponent