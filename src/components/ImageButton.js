import React,{Component} from 'react'
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min'
import {Link} from 'react-router-dom'
import store from '../index'
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum } from "../redux_src/chat_rdx";
import axios from 'axios'
class ImageButton extends Component
{
    render()
    {
        var id=this.props._id
        var imgsrc= this.props._imgsrc
        return(
            <Link to='/main'
            
            onClick={()=>{store.dispatch(setImageNum(id))
                axios.post('http://127.0.0.1:5002/prepare',1)
                .then(function(response) {
                    console.log(response)

                }
                )
            
        
            }}
            style={{
                width:"100px",
                height:"100px",
                backgroundColor:"white",
                borderRadius:'100px',
                boxShadow:'0px 2px 5px 0px gray',
                margin: '0 auto',
            }}>
                <img 
                src={imgsrc}
                style={{
                    objectFit:'fill',
                    width:'100%',
                    height:'100%',
                    borderRadius:'100px',

                }}></img>
               
            </Link>
        )
    }
}
export default ImageButton