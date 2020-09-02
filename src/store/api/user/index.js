import axios from 'axios';

import {axiosConfig, axiosConfigToken, URL} from '../index';

export function getUser(body) {
  return axios.get(`${URL}/api/user`, axiosConfigToken(body.user.token));
}

export function postLogin(body) {
  return axios.post(`${URL}/api/login`, body.data, axiosConfig);
}

export function postRegister(body) {
  return axios.post(`${URL}/api/register`, body.data, axiosConfig);
}

export function postLogout(body) {
  return axios.post(
    `${URL}/api/logout`,
    null,
    axiosConfigToken(body.user.token),
  );
}

export function postSettingsPhoneStore(body) {
  return axios.post(
    `${URL}/api/settings/phone/store`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function patchSettingsPassword(body) {
  return axios.patch(
    `${URL}/api/settings/password`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function patchSettingsGeoUpdate(body) {
  return axios.patch(
    `${URL}/api/settings/geo/update`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function patchSettingsFiat(body) {
  return axios.patch(
    `${URL}/api/settings/fiat`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function patchSettingsLocalBtcAccount(body) {
  return axios.patch(
    `${URL}/api/settings/local_btc_account`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}
