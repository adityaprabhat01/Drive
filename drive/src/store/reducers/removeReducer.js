const initState = {}

const removeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REMOVE':
      console.log('remove file', action)
      break
    default:
      return state
  }
  return state
}

export default removeReducer