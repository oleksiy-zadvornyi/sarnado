import {takeLatest} from 'redux-saga/effects';

import * as User from './user';
import * as Purse from './purse';
import * as Orders from './orders';

function* dataSaga() {
  yield takeLatest('fetchPostLogin', User.fetchPostLogin);
  yield takeLatest('fetchPostLogout', User.fetchPostLogout);
  yield takeLatest('fetchPatchSettingsFiat', User.fetchPatchSettingsFiat);
  yield takeLatest(
    'fetchPostSettingsPhoneStore',
    User.fetchPostSettingsPhoneStore,
  );
  yield takeLatest(
    'fetchPatchSettingsPassword',
    User.fetchPatchSettingsPassword,
  );
  yield takeLatest(
    'fetchPatchSettingsGeoUpdate',
    User.fetchPatchSettingsGeoUpdate,
  );
  yield takeLatest(
    'fetchPatchSettingsLocalBtcAccount',
    User.fetchPatchSettingsLocalBtcAccount,
  );
  yield takeLatest(
    'fetchPatchSettingsPublicOrdersVisibility',
    User.fetchPatchSettingsPublicOrdersVisibility,
  );

  yield takeLatest('fetchGetPurseGetAll', Purse.fetchGetPurseGetAll);

  yield takeLatest('fetchPostOrders', Orders.fetchPostOrders);
}

export default dataSaga;
