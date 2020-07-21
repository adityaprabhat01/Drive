var f = null // name and id
var r = null

function recursion(obj, id) {
  for (let key in obj) {
    if (key == 'id' && obj[key] == id) {
      f = {
        name: obj.name,
        id
      }
      r = obj
    }
    if(typeof(obj[key]) === 'object') {
      recursion(obj[key], id)
    }
  }
}

function createPath (breadcrumb) {
  let path = ''
  breadcrumb.forEach(element => {
    path = path + '/' + element.name
  })
  return path
}

function gotoLoc (id) {
  for (let i=0;i<breadcrumb.length;i++) {
    if (breadcrumb[i].id == id) {
      for (let j=breadcrumb.length - 1;j>i;j--){
        breadcrumb.pop(breadcrumb[j])
      }
      break
    }
  }
}

var breadcrumb = []

function ahead (data) {
  return {
    type: 'MOVE_AHEAD',
    data
  }
}

function behind (data) {
  return {
    type: 'GO_BACK',
    data
  }
}

export const currentPath = (id, back) => {
  return (dispatch, getState) => {
    const firestore = getState().firestore.firestore
    recursion(firestore, id)
    if (back) {
      gotoLoc(id)
    }
    else {
      breadcrumb.push(f)
      console.log(f)
    }
    var path = createPath(breadcrumb)
    dispatch(ahead({ breadcrumb, path }))
  }
}