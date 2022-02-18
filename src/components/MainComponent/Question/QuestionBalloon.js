const QuestionBalloon=(args)=>{
    const question = args.question
    {
        return(
            <div style={{
                paddingTop:'5%',
                paddingBottom:'5%',
                textAlign:'center',
                marginLeft:'10%',
                marginRight:'10%',
                background:'rgba(18,27,40,0.8)',
                wordWrap:'break-word',
                borderRadius:'5px',
                color:'white',
                fontWeight:'600',
                fontSize:'100%',
                marginTop:'3%'
            }}>
                {question}
            </div>
        )
    }
}
export default QuestionBalloon