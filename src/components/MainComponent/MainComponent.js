
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum } from "../../redux_src/chat_rdx";
import TalkingComponent from './TalkingComponent'
import SideComponent from './SideComponent';
import axios from 'axios';
import store from '../..';
import { useMediaQuery } from 'react-responsive'
import MicButton from './MicButton';

    
const mapStateToProps = state => ({
    chat: state.chat,
    video: state.video,
    image: state.image
  });
  
const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
    setImageNum,
  };

const css = {
  image:{
    position:'absolute',
    height:'100vh',
    width:'100vw'
  },
}
  
const MainComponent=()=>
{
  const handleMediaQueryChange = (matches) => { }
    const Pc = useMediaQuery(
        { minWidth: 1024 }, undefined, handleMediaQueryChange
      );
      const Mobile = useMediaQuery(
        { maxWidth: 1024 }, undefined, handleMediaQueryChange
      );
      const widths= Pc?'75vw 25vw' : '100vw'
       return(
         
         <div style={
           {
             display:'grid',
             gridTemplateColumns: widths, 
             position:'absolute',
           }
         }>
           <img style = {css.image} src={require('../../image/background_2.png').default}></img>

           {Pc&&<TalkingComponent></TalkingComponent>}
           {Pc&&<SideComponent></SideComponent>}
           {Mobile&&<div><TalkingComponent></TalkingComponent><MicButton></MicButton></div>}
           
         </div>
       )
          
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)