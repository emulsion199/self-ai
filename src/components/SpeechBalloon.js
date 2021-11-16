import react, {Component} from 'react'
class SpeechBalloon extends Component
{
    render()
    {
      
        return(
            <div style={{
                width:'500px',
                float:'right',
     
      
                
           
            }}>
            <div style={{
                
                width:'fit-content',
                height:'40px',
                borderRadius:'10px',
                backgroundColor:'white',
                boxShadow:'0px 2px 5px gray',
                margin:'5px',
                float:'right',
                
                
                
            }}>
                <div style={{
                   
                    padding:'10px',
                    width:'90%',
                }}>{this.props._speech}</div>
                
            </div>
            </div>
        )
    }
}
export default SpeechBalloon