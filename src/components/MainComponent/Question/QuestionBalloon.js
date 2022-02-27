import font from '../../font.css'
const QuestionBalloon=(args)=>{
    const question = args.question
    {
        return(
            <div style={{
                fontFamily:'Roboto',
                paddingTop:'5%',
                paddingBottom:'5%',
                textAlign:'center',
                marginLeft:'10%',
                marginRight:'10%',
                background:'rgba(0,0,0,0.5)',
                wordWrap:'break-word',
                borderRadius:'5px',
                color:'white',
                fontWeight:'600',
                fontSize:'1.1vw',
                marginTop:'3%'
            }}>
                {question}
            </div>
        )
    }
}
export default QuestionBalloon