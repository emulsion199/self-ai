import store from "../index"
import vdeo from '../components/face.mp4'
export function addTochatdata_input(text) {
    return {
      type: 'ADD_CHAT_INPUT',
      text
    }
  }
export function addTochatdata_output(text) {
    return {
      type: 'ADD_CHAT_OUTPUT',
      text
    }
  }
export function addVideo(video_Obj) {
    return {
      type: 'ADD_VIDEO',
      video_Obj
    }
  }
const initialState={
    video:'blob:http://127.0.0.1:3000/4ad77f0d-e79c-43d2-b4c6-8ef867a175e7',
    chat:[[0,'example input'],[1,'example output']],
    
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'ADD_CHAT_INPUT':
      return {
        ...state,
          chat:state.chat.concat([[0,action.text]]),
      }
      case 'ADD_CHAT_OUTPUT':
      return {
        ...state,
          chat:state.chat.concat([[1,action.text]])
      }
      case 'ADD_VIDEO':
      return {
        ...state,
          video:action.video_Obj
      }
    default:
      return state
    }
}
