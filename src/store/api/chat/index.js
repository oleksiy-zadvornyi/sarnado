import axios from 'axios';

import {axiosConfigToken, URL} from '../index';

export function getChatGetId(body) {
  return axios.get(
    `${URL}/api/chat/get/${body.id}`,
    axiosConfigToken(body.user.token),
  );
}

export function postChatStoreSimple(body) {
  return axios.post(
    `${URL}/api/chat/store/simple`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function postChatStoreCredentials(body) {
  return axios.post(
    `${URL}/api/chat/store/credentials`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function patchDealFundsSentId(body) {
  return axios.patch(
    `${URL}/api/deal/funds_sent/${body.path.id}`,
    null,
    axiosConfigToken(body.user.token),
  );
}

export function patchDealApproveId(body) {
  return axios.patch(
    `${URL}/api/deal/approve/${body.path.id}`,
    null,
    axiosConfigToken(body.user.token),
  );
}
