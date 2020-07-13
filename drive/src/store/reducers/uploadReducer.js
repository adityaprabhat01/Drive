const initState = {}

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPLOAD' :
      console.log('upload file', action)
      break
    default:
      return state
  }
  return state
}

export default uploadReducer