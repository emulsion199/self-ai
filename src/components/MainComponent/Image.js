const css={
    image:{
        height:'auto',
        maxWidth:'60%',
        margin:'auto',
        
    }
}
const Image=(args)=>
{
    const type= args.type
    return(
        <div>
            <div
            style={{position:'absolute', width:'calc(100% - 350px)',bottom:'0px'}}
            >
                <img style={css.image} src={require('../../image/'+type+'_full.png').default}></img>
            </div>  
        </div>
    )
}
export default Image