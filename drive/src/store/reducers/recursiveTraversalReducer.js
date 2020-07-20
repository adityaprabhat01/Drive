const recursiveTraversalReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_PWD_OBJ':
      return {
        ...state,
        recursiveTraversal: action.data
      }
      break
    default:
      return state
  }
}

export default recursiveTraversalReducer