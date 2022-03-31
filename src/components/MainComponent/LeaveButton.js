const css={
    image:{
        height:'15px',
        marginTop:'5px'
    },
    word:{
        fontSize:'20px',
        paddingTop:'0',
        color:'white'
    }
}
const LeaveButton=()=>
{
    return(
        <div style={{
            marginTop:'5vh',
            marginLeft:'2.5vw',
            position:'absolute',
            display:'grid',
            gridTemplateColumns:'1fr 4fr'
        }}>
        <img style={css.image} src={require('../../image/leave chat.png').default}></img>
        <div style={css.word}>LEAVE CHAT</div>
        </div>
    )
}
export default LeaveButton