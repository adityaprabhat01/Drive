const initState = {}

const currentPathReducer = (state = initState, action) => {
  switch (action.type){
    case 'UPDATE_CURRENT_PATH':
      return {
        ...state,
        currentPath: action.data
      }
    default:
      return state
  }
}

export default currentPathReducer