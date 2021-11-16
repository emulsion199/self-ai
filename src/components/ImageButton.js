import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class ImageButton extends Component
{
    render()
    {
        return(
            <Link to='/main'
            style={{
                width:"100px",
                height:"100px",
                backgroundColor:"white",
                borderRadius:'100px',
                boxShadow:'0px 2px 5px 0px gray',
                margin: '0 auto',
            }}>
                <div style={{
                    padding:"38px",
                }}>img</div>
               
            </Link>
        )
    }
}
export default ImageButton