import { useMediaQuery } from 'react-responsive'


const Image=(args)=>
{
    const handleMediaQueryChange = (matches) => { }
    const Pc = useMediaQuery(
        { minWidth: 1024 }, undefined, handleMediaQueryChange
      );
      const Mobile = useMediaQuery(
        { maxWidth: 1024 }, undefined, handleMediaQueryChange
      );

    const widths= Pc?'75%':'100%'
    const imagewidths= Pc?'40vw':'70vw'
    const type= args.type
    const css={
        image:{
            width:imagewidths
        }
    }
    return(
        <div>
            <div style={{
                position:'absolute', 
                width:widths,
                textAlign:'center',
                bottom:'0'
            }}>
                <img style={css.image} src={require('../../image/'+type+'_full.png').default}></img>
            </div>  
        </div>
    )
}
export default Image