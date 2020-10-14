import axios from 'axios';

import {axiosConfigToken, URL} from '../index';

export function postSettingsMobileDevicesExpoTokenCreate(body) {
  return axios.post(
    `${URL}/api/settings/mobile_devices/expo_token/create`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}

export function postSettingsMobileDevicesExpoTokenDelete(body) {
  return axios.post(
    `${URL}/api/settings/mobile_devices/expo_token/delete`,
    body.data,
    axiosConfigToken(body.user.token),
  );
}
