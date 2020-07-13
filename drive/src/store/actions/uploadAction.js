export const uploadFile = (file) => {
  return (dispatch, getState) => {
    console.log('Action created file upload and dispatch')
    // make async call to firebase
    dispatch({ type: 'UPLOAD', file})
  }
}