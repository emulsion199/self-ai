const css={
    image:{
        position:'absolute',
        bottom:'0%',
        left:'15%',
        height:'80%',
        width:'45%',
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}
const Image=(args)=>
{
    const type= args.type
    return(
        <div>
                <div>
                    <img style={css.image} src={require('../../image/'+type+'_full.png').default}></img>
                </div>
                
        </div>
    )
}
export default Image