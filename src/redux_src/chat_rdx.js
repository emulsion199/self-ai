import store from "../index"

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
export function setImageNum(idx) {
  return {
    type: 'SET_IMAGE',
    idx
  }
}
const initialState={
    video:'0',
    chat:[[0,'example input'],[1,'example output']],
    image:0,
    
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
      case 'SET_IMAGE':
      return {
        ...state,
          image:action.idx
      }
    default:
      return state
    }
}
