import {Alert} from 'react-native';
import {put} from 'redux-saga/effects';

import * as ApiAuth from '../../api/auth';
import * as ApiPersonal from '../../api/personal';
import {goBack} from '../../../helpers/navigation';
import {_catch} from '../index';

export function* postUserLogin(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const userLogin = yield ApiAuth.apiPostUserLogin(action.data);
    console.log('apiUserLogin -> ', userLogin);

    yield put({
      type: 'userLogin',
      data: userLogin.data,
    });

    const {role} = userLogin.data.user;
    switch (role) {
      case 'client': {
        const clientData = yield ApiPersonal.apiGetClientData({
          user: userLogin.data,
        });
        console.log('apiClientData -> ', clientData);
        yield put({
          type: 'clientData',
          data: clientData.data,
        });
        break;
      }
      case 'doctor': {
        const doctorData = yield ApiPersonal.apiGetDoctorData({
          user: userLogin.data,
        });
        console.log('apiDoctorData -> ', doctorData);
        yield put({
          type: 'doctorData',
          data: doctorData.data,
        });
        break;
      }
    }

    yield put({type: 'networkIndicator', data: false});
  } catch (error) {
    yield* _catch(error, 'apiUserLogin');
  }
}

export function* postUserForgotPassword(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    yield ApiAuth.apiPostUserForgotPassword(action.data);
    yield put({type: 'networkIndicator', data: false});

    setTimeout(() => {
      Alert.alert(
        'Сообщение',
        'Вам на почту отправлено сообщение с паролем.',
        [{text: 'OK', onPress: goBack}],
        {cancelable: false},
      );
    }, 1000);
  } catch (error) {
    yield* _catch(error, 'apiUserForgotPassword');
  }
}

export function* postUserLogout(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    yield ApiAuth.apiPostUserLogout(action.data);
    yield put({type: 'logoutUser'});
    yield put({type: 'networkIndicator', data: false});
  } catch (error) {
    yield* _catch(error, 'apiUserLogout');
  }
}
