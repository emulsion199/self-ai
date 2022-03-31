import QuestionBalloon from "./QuestionBalloon"
import {useState,useEffect,useRef} from 'react'
import font from '../../font.css'
import { useMediaQuery } from 'react-responsive'

const question_list=
[
    'How do you relieve stress?',
    'What is your favorite sport?',
    'What do you do for fun?',
    'Who is your favorite artist?',
    'What is your favorite brand?',
    'What would you bring to a deserted island?',
    'What is your favorite food?',
    'What do you want to do in the weekend?',
    'Do you love music?',
    'What is your interest these days?',
    'Do you love coffee?',
    'Which season do you like?',
    'Do you like rainy day?',
    'Do you play instruments?',
    'What is your dream?',
]
const a = '<'
const b = '>'
const css={
    unClicked:
    {   
        color:'white',
        background:'rgba(0,0,0,0.3)',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:'5px',
        fontWeight:'400',
        fontSize:'200%',
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'-30%'
    },
    Clicked:
    {
        color:'white',
        background:'rgba(0,0,0,0.5)',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:'5px',
        fontWeight:'400',
        fontSize:'200%',
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'-30%'
    }
}
const Question=(args)=>
{   
    const handleMediaQueryChange = (matches) => { }
    const Pc = useMediaQuery(
        { minWidth: 1024 }, undefined, handleMediaQueryChange
      );
      const Mobile = useMediaQuery(
        { maxWidth: 1024 }, undefined, handleMediaQueryChange
      );
    
    const type= args.type
    
    const [page_num, setPage_num]= useState(1)
    const onLeftMove = (e) => {
        if (page_num > 1) {
            setPage_num(page_num-1);
        }
    };
    const onRightMove = (e) => {
        if (page_num < 3) {
            setPage_num(page_num+1);
        }
    };
    return(
        <div>
            {Pc&&<div>
            <div style={{
                display:'grid',
                gridTemplateColumns:'1fr 1fr',
                paddingTop:'5vh',
            }}>
            <div style={{
                marginTop:'0.5vh',
                marginLeft:'15%',
                height:'50px',
                borderRadius: '100px',
                paddingLeft:'1vw',
                color:'white',
                fontWeight:'600',
                fontSize:'1.3vw',
                fontFamily:'Roboto'
            }}>
                ASK {type}
            </div>
            <div style={{
                paddingTop:'3%',
                marginLeft: '58%',
                color:'white',
                fontWeight:'500',
                fontSize:'1.3vw',
                fontFamily:'Roboto bold'
                }}>
                {page_num} / 3
                </div>
            </div>
        <QuestionBalloon question={question_list[0 + 5*(page_num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[1 + 5*(page_num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[2 + 5*(page_num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[3 + 5*(page_num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[4 + 5*(page_num-1)]}></QuestionBalloon>
        <div style={{
                display:'grid',
                gridTemplateColumns:'1fr 1fr',
                paddingTop:'15%',
                marginBottom:'-5%',
                marginLeft:'9%',
                width:'82%'
            }}>
                <div onClick={onLeftMove} style={page_num==1? css.unClicked:css.Clicked}> {a} </div>
                <div onClick={onRightMove} style={page_num==3? css.unClicked:css.Clicked}> {b} </div>
            </div>
        </div>}
        </div>
    )
}
export default Question