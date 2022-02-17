import {useState,useEffect,useRef} from 'react'
import OurImage from './OurImage'
const type=[1,2,3]
const css={
    real_display:
    {
        overflowX:'hidden',
        width:'100vw',
        margin: '0 auto',
        marginBottom: '50px',
    },
   
    unselected_circle:
    {
        height:'10px',
        width:'10px',
        background:'lightgray',
        borderRadius: '100%',
        transition: 'all ease 0.5s',
    },
    selected_circle:
    {
        height:'10px',
        width:'10px',
        background:'gray',
        borderRadius: '100%',
        transition: 'all ease 0.5s',

    },
    grid_column_circle:
    {
        width:'50px',
        margin:'0 auto',
        display: 'grid',
        gridTemplateColumns: '10px 10px 10px',
        gridGap:'8px',
    },
    letschat_button:
    {
        background: 'white',
        width:'256px',
        height:'64px',
        fontSize: '20px',
        border: '1px solid black',
        margin: '0 auto',
        marginTop:'30px',
        textAlign: 'center',
        transition: 'all ease 0.08s',
    },
    letschat_button_hover:
    {
        background: 'rgb(60,60,60)',
        width:'256px',
        height:'64px',
        fontSize: '20px',
        color: 'white',
        border: '1px solid rgb(60,60,60)',
        margin: '0 auto',
        marginTop:'30px',
        textAlign: 'center',
        transition: 'all ease 0.08s',
    },
}
const SelectImage=()=>
{
    /*가로 스크롤 구현*/
    const scrollRef= useRef()
    const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [sx,setsx]=useState();
  const [gap,setgap]=useState(0);

  const onDragStart = (e) => {
    e.preventDefault();
    setsx(e.pageX)
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
    const d=sx-e.pageX
    setgap(startX-e.pageX)
    const endX=scrollRef.current.scrollLeft
    console.log(d)
    if(d<0)
    {
        setselected_num(selected_num-1)
    }
    if(d>0)
    {
        setselected_num(selected_num+1)
    }
    
  };

  const onDragMove = (e) => {
    if (isDrag) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
       scrollRef.current.scrollLeft = startX - e.pageX;
       if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
    
  
    const [selected_num,setselected_num]= useState(1)
    const [ishover,setishover]= useState(0)
    return (
        <div>
     
            {/* OurImage Load */}
            <div    onMouseDown={onDragStart}
                    onMouseMove={onDragMove}
                    onMouseUp={onDragEnd}
           
            ref={scrollRef} style={css.real_display}
            
            >
                <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                transform: 'translateX('+(-220+gap+(-800)*(selected_num-2))+'px)',
                                transition: 'all ease 0.6s',
                            }}>
                    {type.map((t)=>{
                        return(<OurImage type={t}></OurImage>)
                    })
                    }
                </div>
            </div>
        {/* Circle Load */}
            
            <div style={css.grid_column_circle}>
                {type.map((t)=>{
                    return(
                    <div style={selected_num==t? css.selected_circle : css.unselected_circle}>
                    </div>
                    )})}
            </div>
           

        {/* let's chat */}
        <div style={ishover? css.letschat_button_hover: css.letschat_button }
        onMouseEnter={()=>{setishover(1)}}
        onMouseLeave={()=>{setishover(0)}}>
            <div style={{marginTop:'20px',
     }}>
                Let's Chat!
            </div>
            </div>
            <div style={{marginTop:'10px'}}></div>
        </div>
    )
}

export default SelectImage