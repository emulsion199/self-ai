import react, {Component} from 'react'
class SpeechBalloonOpp extends Component
{
    render()
    {
  
        return(
            <div style={{

                width:'auto',
     
                float:'left',
                margin:'5px',
                display:'grid',
                gridTemplateColumns:'45px 1fr',
           
            }}>
                <div style={{
                    width:'40px',
                    height:'40px',
                    borderRadius:'100px',
                    backgroundColor:'white',
                    boxShadow:'0px 2px 5px gray',
                }}>
                    
                </div>
                <div>
                <div style={{height:'0px'}}>name</div>
            <div style={{
                marginTop:'20px',
                width:'fit-content',
                height:'fit-content',
                borderRadius:'10px',
                backgroundColor:'rgb(28,137,246)',
                boxShadow:'0px 2px 5px gray',    
            }}>
                <div style={{
                    color:'white',
                    padding:'10px',
                    width:'90%',
                }}>{this.props._speech}</div>
                </div>
                
            </div>
            </div>
        )
    }
}
export default SpeechBalloonOpp