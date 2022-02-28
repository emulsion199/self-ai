import AudioRecord from './MicButton'
import TypeComponent from './Typing/TypeComponent'
import Question from './Question/Question'
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum,isrecord } from "../../redux_src/chat_rdx";
import store from '../..';

const mapStateToProps = state => ({
    image: state.image,
});
  
const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
    setImageNum,
    isrecord
};

const SideComponent=()=>
{
    const css=
    {
    bg:
    {   
        height:'100vh',
        width:'25vw',
        background:'rgba(255,255,255,0.1)',
        position:'absolute',
        right:'0',
    },
    }
    const name= store.getState()['image']
        return(
    <div style={css.bg}>
        <Question type = {name}></Question>
        <AudioRecord></AudioRecord>
        <TypeComponent></TypeComponent>
    </div>
        )
}
export default SideComponent
