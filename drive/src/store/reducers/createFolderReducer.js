const initState = {}

const createFolderReducer = (state = initState, action) => {
  
  switch (action.type) {

    case 'CREATE_FOLDER_REQUEST':
      console.log('request data')
      return state
      break

    case 'FOLDER_CREATED':
      console.log('folder created')
      const x = action.data.folderName
      return {
        ...state,
        folderName: {
          ...state.folderName,
          [x]: [x]
        }
      }
      break

    default:
      return state
  }
}

export default createFolderReducer