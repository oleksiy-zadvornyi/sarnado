import axios from 'axios';

import {axiosConfigToken, URL} from '../index';

export function getDealGetOpenId(body) {
  return axios.get(
    `${URL}/api/deal/get_open/${body.id}`,
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
