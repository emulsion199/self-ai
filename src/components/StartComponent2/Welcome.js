import {react} from 'react'

const css={
    bg:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr'
    },
    first_frame:{
        marginLeft:'10%',
        marginTop:'9%',
    },
    second_frame:{
        marginLeft:'8%',
        marginTop:'8%',
        marginRight:'8%'
    },
    title:{
        fontSize: '350%',   
    },
    subtitle:{
        marginTop: '3%',
    },
    sentence:{
        fontSize:'100%'
    },
    name:{
        marginBottom:'-10%',
        fontSize: '130%',
        fontWeight:'550',
    }
}
const Welcome=()=>
{
    return (
        <div style={css.bg}>
            <div style={css.first_frame}>
                <div style={css.name}>
                    Self-AI
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
                    <div style={css.sentence}>Imagine if you can extend and control your existence to the digital world.</div>
                    <div style={css.sentence}>Imagine if you can have full control of your digital clone's interaction.</div> 
                    <div style={css.sentence}>Imagine the numerous possibilities such as virtual interviews for prospective employers or virtual blind dates for prospective mates.</div>
                </div>
                <div style={css.subtitle}>
                    Welcome to Self-AI. Our vision is to allow people to have a complete control over ones digital presence. Come talk to the digital clones of the founding members where the AI model has been trained to replicate the voice, personality, and personal knowledge (Demo still under working progress).                </div>
            </div>
        </div>
    )
}
export default Welcome