export function showNetworkIndicator(data) {
  return {
    type: 'networkIndicator',
    data,
  };
}

export function showToast(data) {
  return {
    type: 'toast',
    data,
  };
}
