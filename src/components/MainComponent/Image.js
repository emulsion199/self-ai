const css={
    image:{
        width:'40vw'
    }
}
const Image=(args)=>
{
    const type= args.type
    return(
        <div>
            <div style={{
                position:'absolute', 
                width:'calc(100% - 350px)',
                textAlign:'center',
                bottom:'0'
            }}>
                <img style={css.image} src={require('../../image/'+type+'_full.png').default}></img>
            </div>  
        </div>
    )
}
export default Image