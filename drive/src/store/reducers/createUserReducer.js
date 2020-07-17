const initState = {}

const createUserReducer = (state= initState, action) => {
  switch (action.type) {

    case 'ACCOUNT_CREATION_REQUEST':
      console.log('account creation requested')
      return state

    case 'ACCOUNT_CREATED':
      console.log('account created')
      return state

    default: 
      return state

  }
}

export default createUserReducer