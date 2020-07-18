const initState = {}

const firestoreReducer = (state = initState, action) => {
  
  switch (action.type) {

    case 'REQUEST_DATA':
      console.log('request data')
      return state
      break

    case 'RECEIVE_FAILURE':
      console.log('data failure')
      return state
      break

    case 'DATA_RECEIVED':
      console.log('data received')
      return {
        ...state,
        firestore: action.data
      }
      break

    default:
      return state
  }
}

export default firestoreReducer