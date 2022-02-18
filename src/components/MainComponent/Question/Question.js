import MoveButton from "./MoveButton"
import QuestionBalloon from "./QuestionBalloon"

const question_list=
[
    'How do you relieve stress?',
    'What is your favorite sport?',
    'What do you do for fun?',
    'Who is your favorite artist?',
    'What is your favorite brand?',
    'What would you bring to a deserted island?',
    'How do you relieve stress?',
    'What is your favorite sport?',
    'What do you do for fun?',
    'Who is your favorite artist?',
    'What is your favorite brand?',
    'What would you bring to a deserted island?',
    'How do you relieve stress?',
    'What is your favorite sport?',
    'What do you do for fun?',
    'Who is your favorite artist?'
]
const Question=(args)=>
{   
    const type= args.type
    const num = 1
    return(
        <div>
            <div style={{
                display:'grid',
                gridTemplateColumns:'1fr 1fr',
                paddingTop:'15%',
                marginBottom:'-5%'
            }}>
            <div style={{
                marginLeft:'15%',
                height:'50px',
                borderRadius: '100px',
                paddingLeft:'20px',
                color:'white',
                fontWeight:'600',
                fontSize:'150%'
            }}>
                Ask {type}
            </div>
            <div style={{
                paddingTop:'3%',
                marginLeft: '58%',
                color:'white',
                fontWeight:'500',
                fontSize:'125%'
                }}>
                {num} / 3
                </div>
            </div>
        <QuestionBalloon question={question_list[0 + 5*(num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[1 + 5*(num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[2 + 5*(num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[3 + 5*(num-1)]}></QuestionBalloon>
        <QuestionBalloon question={question_list[4 + 5*(num-1)]}></QuestionBalloon>
        <MoveButton></MoveButton>
        </div>
    )
}
export default Question