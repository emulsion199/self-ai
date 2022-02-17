import CCButton from './CCButton'
import LeaveButton from './LeaveButton'
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
        <CCButton></CCButton>
    </div>
        )
}
export default TalkingComponent