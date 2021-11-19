import React, { useState, useCallback, createRef } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactPlayer from 'react-player'
import axios from 'axios'
import store from '../index'
import { addTochatdata_input, addTochatdata_output, addVideo,setImageNum} from "../redux_src/chat_rdx";
import connect from 'react-redux'
import fv from './face.mp4'
const mapStateToProps = (state) => {
    return state
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTochatdata_input: () => {
        dispatch(addTochatdata_input);
      },
      addTochatdata_output: () => {
        dispatch(addTochatdata_output);
      },
      addVideo: () => {
        dispatch(addVideo);
      }
    };
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
      
      setAudioUrl(e.data);
      setOnRec(true);
      setAudio(URL.createObjectURL(e.data))
 
      var wavfromblob = new File([e.data], "recorded"+1+".ogg");
      
      var fd=new FormData()
      fd.append("audio",wavfromblob)
      console.log(fd)
<<<<<<< Updated upstream
    
      axios.post('http://127.0.0.1:'+port.port,fd)
=======
      
      axios.post('http://localhost:5001',fd)
>>>>>>> Stashed changes
        .then(function(response) {
          
            store.dispatch(addTochatdata_input(response.data['input']))
            store.dispatch(addTochatdata_output(response.data['output']))
           
<<<<<<< Updated upstream
            axios.get('http://127.0.0.1:'+port.port+'/make',{responseType:'blob'}).then(function(response)
=======
            axios.get('http://localhost:5001/make',{responseType:'blob'}).then(function(response)
>>>>>>> Stashed changes
            {
              console.log(response.data)
              //console.log(window.URL.createObjectURL(vid))
  
               
               
               // console.log(result);
                store.dispatch(addVideo(URL.createObjectURL(response.data)))
             
            })
        })
        .catch(function(error) {
            
            console.log(error);
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



 

 

  return (
    <div
 
>
      <div
      style={{height:'50px',
    backgroundColor:'gray',
    width:'50px',
    borderRadius:'100px',
    color:'white',
    margin:'0 auto',
}}>
    <div
      onClick={onRec ? onRecAudio : offRecAudio}>
          <div style={{padding:'10px',
        borderRadius:'100px'}}> {onRec ? '녹음':'종료'}</div>
         
         
    </div>
    </div>
    
      
    </div>
  );
};

export default AudioRecord;