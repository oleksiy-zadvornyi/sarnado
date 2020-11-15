import axios from 'axios';

import {axiosConfigToken, URL} from '../index';

export function getPurseGetAll(body) {
  return axios.get(
    `${URL}/api/purse/get/all`,
    axiosConfigToken(body.user.token),
  );
}

export function getPurseGetAllAmountId(body) {
  return axios.get(
    `${URL}/api/purse/get/all_amount/${body.path.id}`,
    axiosConfigToken(body.user.token),
  );
}

export function getPurseDeposits(body) {
  return axios.get(
    `${URL}/api/purse/deposits`,
    axiosConfigToken(body.user.token),
  );
}

export function getPurseWithdrawals(body) {
  return axios.get(
    `${URL}/api/purse/withdrawals`,
    axiosConfigToken(body.user.token),
  );
}
