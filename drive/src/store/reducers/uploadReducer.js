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
      const x = action.data.fileName
      const y = action.data.url
      return {
        ...state,
        files: {
          ...state.files,
          [x]: y
        }
      }
      break

    default:
      return state
  }
}

export default uploadReducer