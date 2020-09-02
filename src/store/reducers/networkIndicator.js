const initialState = {
  value: false,
  count: 0,
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'networkIndicator': {
      const {data} = action;
      const {count, value} = state;

      if (data === value) {
        if (data) {
          return {
            value,
            count: count + 1,
          };
        }
      } else if (data) {
        return {
          value: data,
          count: count + 1,
        };
      } else {
        const c = count - 1;
        if (c > 0) {
          return {
            value: true,
            count: c,
          };
        }
        return {
          value: false,
          count: c,
        };
      }
      return state;
    }
    default:
      return state;
  }
}
