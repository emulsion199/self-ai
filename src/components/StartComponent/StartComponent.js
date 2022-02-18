import {useEffect,useState} from 'react'
import Welcome from './Welcome' 
import Select from './Select'


const StartComponent=()=>
{
  const [page,setpage]=useState(0)
  const [sh,setsh]=useState(0)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  const handleScroll = () => {
    setsh(window.screen.height)
    
    if (window.scrollY == 0 && page==1) {
      setpage(0);
      return;
    }
    if (window.scrollY != 0 && page==0) {
      setpage(1);
      return;
    }
  };
    return(
      
      <div style={{
        height:'100.1vh',
        //height:'100%',
        overflowY:'hidden',
        }}>
          <div style={{
            transform: 'translateY('+(-sh)*(page)+'px)',
            transition: 'all ease 0.4s',
          }}>
            
        <Welcome></Welcome>
        <Select></Select>
        </div>
      </div>
    )

}
export default StartComponent