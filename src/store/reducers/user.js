const initialState = {
  accessToken: '',
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'logoutUser': {
      return initialState;
    }
    default:
      return state;
  }
}
