import axios from 'axios';

import {axiosConfigToken, getParams, URL} from '../index';

export function postOrderCheckCheckType(body) {
  return axios.post(
    `${URL}/api/order/check/${body.checkedType}`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function getOrderGetFiats(body) {
  return axios.get(
    `${URL}/api/order/get_fiats${getParams(body.path)}`,
    axiosConfigToken(body.user.token),
  );
}

export function getOrderFindId(body) {
  return axios.get(
    `${URL}/api/order/find/${body.id}`,
    axiosConfigToken(body.user.token),
  );
}

export function postOrderGetExchangeRates(body) {
  return axios.post(
    `${URL}/api/order/get_exchange_rates`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function postOrderStore(body) {
  return axios.post(
    `${URL}/api/order/store`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function postOrders(body) {
  return axios.post(
    `${URL}/api/orders`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}
