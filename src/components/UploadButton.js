import React,{Component} from 'react'
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min'
import {Link} from 'react-router-dom'
import store from '../index'
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum } from "../redux_src/chat_rdx";
import axios from 'axios'
class UploadButton extends Component
{
    render()
    {
        var id=this.props._id
        var imgsrc= this.props._imgsrc
        var port = this.props._port
        var url = this.props._url
        return(
            <div 
            onClick={()=>{alert('upload')}}
            
            
        
          
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
               
            </div>
        )
    }
}
export default UploadButton