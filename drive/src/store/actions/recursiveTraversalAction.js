var f = null
var r = null

function recursion(obj, parent, id) {
  for (let key in obj) {
    if (key == 'id' && obj[key] == id) {
      f = {
        name: obj.name,
        id
      }
      r = obj
    }
    if(typeof(obj[key]) === 'object') {
      recursion(obj[key], parent + '_' + key, id)
    }
  }
}

function pwd_obj(data) {
  return {
    type: 'GET_PWD_OBJ',
    data
  }
}

export const recursiveTraversal = (id) => {
  return (dispatch, getState) => {
    const firestore = getState().firestore.firestore
    recursion(firestore, firestore.name, id)
    dispatch(pwd_obj({ f, r }))
  }
}