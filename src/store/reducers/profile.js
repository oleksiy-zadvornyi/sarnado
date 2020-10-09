const initialState = {};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'postLogout': {
      return initialState;
    }
    case 'getUser':
    case 'patchSettingsGeoUpdate':
    case 'patchSettingsPublicOrdersVisibility': {
      return action.data;
    }
    case 'postSettingsPhoneStore': {
      const {phone} = action.data;
      return {...state, phone};
    }
    case 'patchSettingsFiat': {
      const {code} = action.data;
      return {...state, fiat: code};
    }
    case 'patchSettingsLocalBtcAccount': {
      const {local_btc_account} = action.data;
      return {...state, local_btc_account};
    }
    default:
      return state;
  }
}
