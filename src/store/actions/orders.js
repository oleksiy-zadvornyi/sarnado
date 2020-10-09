export function fetchPostOrders(data) {
  return {
    type: 'fetchPostOrders',
    data,
  };
}

export function fetchPatchOrderCancelId(data) {
  return {
    type: 'fetchPatchOrderCancelId',
    data,
  };
}
