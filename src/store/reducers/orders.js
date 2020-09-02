const initialState = {
  buy: [],
  sell: [],
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'postLogout': {
      return initialState;
    }
    case 'postOrdersSell': {
      return {
        ...state,
        sell: action.data,
      };
    }
    case 'postOrdersBuy': {
      return {
        ...state,
        buy: action.data,
      };
    }
    default:
      return state;
  }
}
