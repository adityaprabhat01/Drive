import recursion from './recursiveTraversalAction'

function createPath (breadcrum) {
  let path = ''
  breadcrum.forEach(element => {
    path = path + '/' + element.name
  })
  return path
}

function gotoLoc (id) {
  recursion(user, 'user', id)
  // r contains the ahead object
  for (let i=0;i<breadcrum.length;i++) {
    if (breadcrum[i].id == id) {
      for (let j=breadcrum.length - 1;j>i;j--){
        breadcrum.pop(breadcrum[j])
      }
      break
    }
  }
}

var breadcrum = []
var f = null // name and id
var r = null

function ahead (data) {
  return {
    type: 'MOVE_AHEAD',
    data
  }
}

export const currentPath = (id) => {
  return (dispatch, getState) => {
    const firestore = getState().firestore.firestore
    f = recursion(firestore, firestore.name, id)
    breadcrum.push(f)
    var path = createPath(breadcrum)
    dispatch(ahead({ breadcrum, path }))
  }
}