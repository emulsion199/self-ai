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
        marginLeft:'20%',
        marginTop:'17%',
        marginRight:'10%'
    },
    title:{
        fontSize: '350%',   
    },
    subtitle:{
        fontSize: '100%',
        marginTop: '3%',
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
                    We believe Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. lit non deserunt lor do amet.
                </div>
                <div style={css.subtitle}>
                    Velit officia consequat duis enim velit duis enim velit duis enim velit mollit velit ollivelit molli veli. 
                </div>
            </div>
        </div>
    )
}
export default Welcome