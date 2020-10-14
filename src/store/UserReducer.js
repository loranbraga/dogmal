const INITIAL_STATE = {
  userEmail: '',
  loggedUser: false,
}

function userReducer(state = INITIAL_STATE, action){
  
  switch(action.type){
    case 'LOGIN':
      return { ...state, loggedUser: true, userEmail: action.userEmail }
    case 'LOGOUT':
      return { ...state, loggedUser: false, userEmail: null }
    default:
      return state
  }
}

export default userReducer