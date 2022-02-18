import CCButton from './CCButton'
import LeaveButton from './LeaveButton'
import Image from './Image'
const TalkingComponent=()=>
{
    const css=
        {
        bg:
        {
            height:'100vh',
            width:'100wh',
            backgroundColor:'rgb(28,37,60)',
        }
        }
        return(
    <div style={css.bg}>
        <LeaveButton></LeaveButton>
        <Image type = {'joel'}></Image>
        <CCButton></CCButton>
    </div>
        )
}
export default TalkingComponent