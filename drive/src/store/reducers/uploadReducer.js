const initState = {}

// still returning prev state
const uploadReducer = (state = initState, action) => {

  switch (action.type) {

    case 'UPLOAD_REQUEST':
      console.log('upload request')
      return state
      break

    case 'UPLOAD_FAILURE':
      console.log('upload failure')
      return state
      break

    case 'UPLOAD_SUCCESS':
      console.log('upload success')
      return state
      break

    default:
      return state
  }
}

export default uploadReducer