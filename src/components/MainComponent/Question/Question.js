import QuestionBalloon from "./QuestionBalloon"
const question_list=
[
    'How do you relieve stress?',
    'What is your favorite sport?',
    'What do you do for fun?',
    'Who is your favorite artist?',
    'What is your favorite brand?',
    'What would you bring to a deserted island?'
]
const Question=(args)=>
{   
    const type= args.type
    const num = 1
    return(
        <div>
            <div style={{
                paddingTop:'15%',
                marginLeft:'5%',
                width:'300px',
                height:'50px',
                border: '0px solid black',
                borderRadius: '100px',
                paddingLeft:'20px',
                color:'white',
                fontWeight:'600',
                fontSize:'150%'
            }}>
                Ask {type}
            </div>
            <QuestionBalloon></QuestionBalloon>
        </div>
    )
}
export default Question