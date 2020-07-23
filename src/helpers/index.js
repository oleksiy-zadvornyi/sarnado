export function equals(props, state) {
  if (props) {
    return state || props;
  }
  return props || state;
}
