const initialState = {};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'postLogout': {
      return initialState;
    }
    case 'postLogin': {
      return action.data;
    }
    default:
      return state;
  }
}
