const initialState = {
  id: 0,
  text: '',
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'toast': {
      return {
        id: state.id + 1,
        text: action.data,
      };
    }
    default:
      return state;
  }
}
