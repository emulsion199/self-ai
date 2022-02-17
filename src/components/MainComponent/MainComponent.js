
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum } from "../../redux_src/chat_rdx";
import TalkingComponent from './TalkingComponent'
import SideComponent from './SideComponent';

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

  
  
const MainComponent=()=>
{

       return(
         <div style={
           {
             display:'grid',
             gridTemplateColumns: '1.5fr 0.5fr',
           }
         }>
           <TalkingComponent></TalkingComponent>
           <SideComponent></SideComponent>
         </div>
       )
          
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)