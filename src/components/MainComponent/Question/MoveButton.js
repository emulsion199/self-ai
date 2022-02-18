const MoveButton=(args)=>{
    const direction = args.direction
    {
        return(
            <div style={{
                color:'white',
                background:'rgba(18,27,40,0.8)',
                textAlign:'center',
                justifyContent:'center',
                borderRadius:'5px',
                fontWeight:'400',
                fontSize:'200%',
                marginLeft:'3%',
                marginRight:'3%',
                marginTop:'-30%'
            }}>
                {direction}
            </div>
        )
    }
}
export default MoveButton