import {react} from 'react'

const css={
    title:{
        fontSize: '600%',   
        textAlign: 'center',
    },
    subtitle:{
        width: '45%',
        margin: '0 auto',
        fontSize: '130%',
        textAlign: 'center',
        marginTop: '5%',
    },
    line:{
        textAlign: 'center',
        margin : '0 auto',
        marginBottom: '25%'
    }
}
const Welcome=()=>
{
    return (
        <div>
        <div style={{...css.title, marginTop:'13%'}}>
            WHERE MY 
        </div>
        <div style={css.title}>
            PRESENCE BEGINS
        </div>
        <div style={{...css.subtitle, marginBottom: '3%'}}>
        We believe Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit duis enim velit duis enim velit mollit velit ollivelit molli veli. lit non deserunt lor do amet.
        </div>
        <div style={css.line} > _______ </div>
        </div>
    )
}
export default Welcome