import AudioRecord from './MicButton'
import TypeComponent from './Typing/TypeComponent'
import Question from './Question/Question'
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
        return(
    <div style={css.bg}>
        <Question type = {'Joel'}></Question>
        <AudioRecord></AudioRecord>
        <TypeComponent></TypeComponent>
    </div>
        )
}
export default SideComponent
