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
        var port = this.props._port
        var url = this.props._url
        return(
            <Link to='/main'
            
            onClick={()=>{store.dispatch(setImageNum(id))

                axios.post(url+':'+port+'/prepare',{'image_num':store.getState()['image']})

                .then(function(response) {
                    console.log(response)

                }
                )
            }}
            >
                <img 
                src={imgsrc}
                style={{
                    objectFit:'fill',
                    width:'300px',
                    height:'300px',
                    

                }}></img>
               
            </Link>
        )
    }
}
export default ImageButton