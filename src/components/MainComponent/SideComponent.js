import AudioRecord from './MicButton'
import TypeComponent from './Typing/TypeComponent'

const SideComponent=()=>
{
    const css=
    {
    bg:
    {
        height:'100vh',
        width:'100wh',
        backgroundColor:'rgba(30,36,65,0.7)',
    }
    }
        return(
    <div style={css.bg}>

        <AudioRecord></AudioRecord>
        <TypeComponent></TypeComponent>
    </div>
        )
}
export default SideComponent
