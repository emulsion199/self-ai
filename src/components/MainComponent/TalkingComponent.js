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
        },
        link:{
            textDecoration:'none'
        }
        }
        return(
    <div style={css.bg}>
        <a href='http://localhost:3000/#location123' style={css.link}>
            <LeaveButton></LeaveButton>
        </a> 
        <Image type = {'joel'}></Image>
        <CCButton></CCButton>
    </div>
        )
}
export default TalkingComponent