import {react} from 'react'
const css={
    title:{
        fontSize: '100px',   
        textAlign: 'center',
    },
    subtitle:{
        width: '834px',
        margin: '0 auto',
        fontSize: '24px',
        textAlign: 'center',
        marginTop: '50px',
    }
}
const Welcome=()=>
{
    return (
        <div>
        <div style={{...css.title, marginTop:'160px'}}>
            WHERE MY 
        </div>
        <div style={css.title}>
            PRESENCE BEGINS
        </div>
        <div style={{...css.subtitle, marginBottom: '220px'}}>
        We believe Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit duis enim velit duis enim velit mollit velit ollivelit molli veli. lit non deserunt lor do amet.
        </div>
        </div>
    )
}
export default Welcome