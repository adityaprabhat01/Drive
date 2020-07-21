const initState = {}

const currentPathReducer = (state = initState, action) => {
  switch (action.type){
    case 'MOVE_AHEAD':
      return {
        ...state,
        currentPath: action.data
      }
    default:
      return state
  }
}

export default currentPathReducer