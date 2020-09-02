import axios from 'axios';

import {axiosConfigToken, getParams, URL} from '../index';

export function getSettingsGeoCountries(body) {
  return axios.get(
    `${URL}/api/settings/geo/countries`,
    axiosConfigToken(body.user.token),
  );
}

export function getSettingsGeoStates(body) {
  return axios.get(
    `${URL}/api/settings/geo/states${getParams(body.path)}`,
    axiosConfigToken(body.user.token),
  );
}

export function getSettingsGeoCities(body) {
  return axios.get(
    `${URL}/api/settings/geo/cities${getParams(body.path)}`,
    axiosConfigToken(body.user.token),
  );
}

export function getCurrencyGetFiat(body) {
  return axios.get(
    `${URL}/api/currency/get/fiat`,
    axiosConfigToken(body.user.token),
  );
}

export function getCurrencyGetCrypto(body) {
  return axios.get(
    `${URL}/api/currency/get/crypto`,
    axiosConfigToken(body.user.token),
  );
}

export function getPairs(body) {
  return axios.get(`${URL}/api/pairs`, axiosConfigToken(body.user.token));
}
