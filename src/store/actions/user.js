export function fetchPostLogin(data) {
  return {
    type: 'fetchPostLogin',
    data,
  };
}

export function fetchPostLogout(data, email) {
  return {
    type: 'fetchPostLogout',
    data,
    email,
  };
}

export function fetchGetUser(data) {
  return {
    type: 'fetchGetUser',
    data,
  };
}

export function fetchPostSettingsPhoneStore(data) {
  return {
    type: 'fetchPostSettingsPhoneStore',
    data,
  };
}

export function fetchPatchSettingsPassword(data) {
  return {
    type: 'fetchPatchSettingsPassword',
    data,
  };
}

export function fetchPatchSettingsGeoUpdate(data) {
  return {
    type: 'fetchPatchSettingsGeoUpdate',
    data,
  };
}

export function fetchPatchSettingsFiat(data) {
  return {
    type: 'fetchPatchSettingsFiat',
    data,
  };
}

export function fetchPatchSettingsLocalBtcAccount(data) {
  return {
    type: 'fetchPatchSettingsLocalBtcAccount',
    data,
  };
}

export function fetchPatchSettingsPublicOrdersVisibility(data) {
  return {
    type: 'fetchPatchSettingsPublicOrdersVisibility',
    data,
  };
}

export function reducePostLogout() {
  return {
    type: 'postLogout',
  };
}
