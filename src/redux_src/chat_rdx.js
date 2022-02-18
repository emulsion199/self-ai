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
    chat:'example',
    image:1,
    
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'ADD_CHAT_INPUT':
      return {
        ...state,
          chat:action.text,
      }
      case 'ADD_CHAT_OUTPUT':
      return {
        ...state,
          chat:action.text,
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
