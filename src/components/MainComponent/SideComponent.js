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
        width:'100wh',
        backgroundColor:'rgba(30,36,65,0.83)',
    }
    }
        return(
    <div style={css.bg}>
        <Question type = {'Joel'}></Question>
        <AudioRecord></AudioRecord>
        </div>
        )
}
export default SideComponent
