import {put} from 'redux-saga/effects';

import * as Api from '../../api/user';
import * as ApiMobileDevice from '../../api/mobileDevice';
import {_catch, registerForPushNotificationsAsync} from '../../../helpers';

export function* fetchPostLogin(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const user = yield Api.postLogin(action.data);
    console.log('postLogin -> ', user);
    const profile = yield Api.getUser({user: user.data});
    console.log('getUser -> ', profile);

    const expoPushToken = yield registerForPushNotificationsAsync(
      action.data.email,
    );
    const asd = yield ApiMobileDevice.postSettingsMobileDevicesExpoTokenCreate({
      user: user.data,
      data: {expo_token: expoPushToken.data},
    });
    console.log(asd);

    yield put({type: 'postLogin', data: user.data});
    yield put({type: 'getUser', data: profile.data});
  } catch (error) {
    yield* _catch(error, 'postLogin');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPostSettingsPhoneStore(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const user = yield Api.postSettingsPhoneStore(action.data);
    console.log('postSettingsPhoneStore -> ', user);
    yield put({type: 'postSettingsPhoneStore', data: action.data.data});
  } catch (error) {
    yield* _catch(error, 'postSettingsPhoneStore');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPatchSettingsPassword(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const user = yield Api.patchSettingsPassword(action.data);
    console.log('patchSettingsPassword -> ', user);
  } catch (error) {
    yield* _catch(error, 'patchSettingsPassword');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPatchSettingsGeoUpdate(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const user = yield Api.patchSettingsGeoUpdate(action.data);
    console.log('patchSettingsGeoUpdate -> ', user);
    yield put({type: 'patchSettingsGeoUpdate', data: user.data});
  } catch (error) {
    yield* _catch(error, 'patchSettingsGeoUpdate');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPatchSettingsFiat(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const user = yield Api.patchSettingsFiat(action.data);
    console.log('patchSettingsFiat -> ', user);
    yield put({type: 'patchSettingsFiat', data: action.data.data});
  } catch (error) {
    yield* _catch(error, 'patchSettingsFiat');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPatchSettingsLocalBtcAccount(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const user = yield Api.patchSettingsLocalBtcAccount(action.data);
    console.log('patchSettingsLocalBtcAccount -> ', user);
    yield put({type: 'patchSettingsLocalBtcAccount', data: action.data.data});
  } catch (error) {
    yield* _catch(error, 'patchSettingsLocalBtcAccount');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPatchSettingsPublicOrdersVisibility(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const profile = yield Api.patchSettingsPublicOrdersVisibility(action.data);
    console.log('patchSettingsPublicOrdersVisibility -> ', profile);
    yield put({
      type: 'patchSettingsPublicOrdersVisibility',
      data: profile.data,
    });
  } catch (error) {
    yield* _catch(error, 'patchSettingsPublicOrdersVisibility');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPostLogout(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const expoPushToken = yield registerForPushNotificationsAsync(action.email);
    yield ApiMobileDevice.postSettingsMobileDevicesExpoTokenDelete({
      user: action.data.user,
      data: {expo_token: expoPushToken.data},
    });

    const user = yield Api.postLogout(action.data);
    console.log('postLogout -> ', user);

    yield put({type: 'postLogout'});
  } catch (error) {
    yield* _catch(error, 'postLogout');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
