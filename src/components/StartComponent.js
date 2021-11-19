import React,{Component} from 'react'
import ImageButton from './ImageButton'
class StartComponent extends Component
{
    render()
    {

    return(
<div style={{
      
        display:'grid',
        gridTemplateRows:'50px 300px',
      }}>
        <div style={{
          color:'gray',
          margin:'0 auto',
          marginTop:'200px',
        }}>
          원하시는 캐릭터를 선택해주세요.
        </div>
      <div style={{
        width:'350px',
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        margin:' 0 auto',
        marginTop:'200px',
        
      }}>
       <ImageButton _port={8882} _id={1} _imgsrc={require('../image/1.jpeg').default}></ImageButton>
       <ImageButton _port={8882} _id={2} _imgsrc={require('../image/2.jpeg').default}></ImageButton>
       <ImageButton _port={8882} _id={3} _imgsrc={require('../image/3.jpeg').default}></ImageButton>
      </div>
      </div>
    )
    }
}
export default StartComponent