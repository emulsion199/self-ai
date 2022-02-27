import {react} from 'react'
import font from '../font.css'
const css={
    bg:{
        position:'relative',
        display:'grid',
        gridTemplateColumns:'1fr 1fr'
    },
    first_frame:{
        marginLeft:'10%',
        marginTop:'9%',
    },
    second_frame:{
        marginLeft:'28%',
        marginTop:'16%',
        marginRight:'8%'
    },
    title:{
        fontSize: '4vw',   
    },
    subtitle:{
        marginTop: '3%',
    },
    sentence:{
        fontSize:'1.2vw',
        fontFamily:'Roboto'
    },
    name:{
        marginBottom:'-10%',
        fontSize: '1.8vw',
        fontWeight:'400',
    }
}
const Welcome=()=>
{
    return (
        <div style={css.bg}>
            <div style={css.first_frame}>
                <div style={css.name}>
                    SELF-AI
                </div>
                <div style={{...css.title, marginTop:'13%'}}>
                    WHERE MY 
                </div>
                <div style={css.title}>
                    PRESENCE BEGINS
                </div>
            </div>
            <div style={css.second_frame}>
                <div style={css.subtitle}>
                <div style={css.sentence}>
                    Welcome to Self-AI. We are digital clones of each one of our founding members. The AI Model has been trained to replicate the voice, personality, and personal knowledge. 
                </div>
                </div>
                <div style={css.subtitle}>
                    <div style={css.sentence}>Our vision is to connect the world through a virtual self. </div>
                    <div style={css.sentence}>To learn more, start a conversation or contact us via <a href="mailto:wkddydpf@gmail.com">Email</a>.</div>
                </div>
            </div>
        </div>
    )
}
export default Welcome