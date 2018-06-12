import { INC, DEC } from '../constants/example'

const reducer = (state = { value: 0 }, action) => {
  switch(action.type) {
    case INC:
      return {
        ...state,
        value: state.value + 1
      }
    case DEC:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state  
  }
}

export default reducer