import React, { useState, useCallback, createRef } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactPlayer from 'react-player'
import axios from 'axios'
import store from '../../index'
import { addTochatdata_input, addTochatdata_output, addVideo,setImageNum,sethowmanytry} from "../../redux_src/chat_rdx";
import { connect,useSelector } from 'react-redux'
import ReactAudioPlayer from "react-audio-player";

const mapStateToProps = state => ({
  chat: state.chat,
  video: state.video,
  image: state.image,
  try: state.try,

});

const mapDispatchToProps = {
  addTochatdata_input,
  addTochatdata_output,
  addVideo,
  setImageNum,
  sethowmanytry,
};
const AudioRecord = (port) => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [audio, setAudio]=useState();

  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  // 사용자가 음성 녹음을 중지했을 때
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      store.dispatch(sethowmanytry(store.getState()['try']+1))
      console.log(store.getState()["try"])
      setAudioUrl(e.data);
      setOnRec(true);
      setAudio(URL.createObjectURL(e.data))
 
      var wavfromblob = new File([e.data], "recorded"+1+".ogg");
      
      var fd=new FormData()
      fd.append("audio",wavfromblob)
      axios.post("https://self-ai.org:8882/setid",{"id":store.getState()["image"],
      "try":store.getState()["try"]
    })
      .then(function(response){
      
      
        axios.post("https://self-ai.org:8882",fd)

        .then(function(response) {
            console.log(response)
          
            //store.dispatch(addTochatdata_input(response.data['input']))
            store.dispatch(addTochatdata_output(response.data['output']))
            
            axios.get(`https://self-ai.org:8882/get_mp3?timestamp=${new Date().getTime()}`,{responseType:'blob'}).then(function(response)
            {
              console.log(response.data)
              console.log(URL.createObjectURL(response.data))
  
                store.dispatch(addVideo(URL.createObjectURL(response.data)))
             
            })
        }
        )
      })
       
      
      
    }

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();
    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
   
}

const [ins,setins]=useState();
const sendMessage=()=>
{
  setins("")
}

  return (
    <div
>
<ReactAudioPlayer
src={store.getState()['video']}
autoPlay={true}

/>
      <div style={{
        position:'absolute',
        bottom:'15vh',
        right:'10.6vw',
        height:'50px',
        filter:'invert('+onRec*100+'%)',
        opacity:100-onRec*40+'%',
        backgroundColor:'rgba(255,255,255,1)',
        width:'50px',
        borderRadius:'100px',
        color:'white',
        margin:'0 auto',
        transition: 'all ease 0.2s',
      }}
      onClick={onRec ? onRecAudio : offRecAudio}>
      
        <img src={require('../../image/mic.png').default}
        style={{
          width:'30px',
          height:'30px',
          marginLeft:'10px',
          marginTop:'10px',
          borderRadius:'100%',
          opacity:'1',
          
        }}>
          
         </img>

     
       
         
         
  
    </div>
    
    
      
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(AudioRecord);