import axios from 'axios';

import {axiosConfigToken, getParams, URL} from '../index';

export function getDealGetOpenId(body) {
  return axios.get(
    `${URL}/api/deal/get_open/${body.id}`,
    axiosConfigToken(body.user.token),
  );
}

export function getDealsGetActive(body) {
  return axios.get(
    `${URL}/api/deals/get/active${getParams(body.path)}`,
    axiosConfigToken(body.user.token),
  );
}

export function getDealsGetClosed(body) {
  return axios.get(
    `${URL}/api/deals/get/closed${getParams(body.path)}`,
    axiosConfigToken(body.user.token),
  );
}

export function getDealsGetCompleted(body) {
  return axios.get(
    `${URL}/api/deals/get/completed/${body.path.id}`,
    axiosConfigToken(body.user.token),
  );
}

export function postDealStore(body) {
  return axios.post(
    `${URL}/api/deal/store`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function postReviewsStore(body) {
  return axios.post(
    `${URL}/api/reviews/store`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}
