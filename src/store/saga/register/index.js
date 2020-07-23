import {put} from 'redux-saga/effects';

import * as ApiRegister from '../../api/register';
import * as ApiPersonal from '../../api/personal';
import {_catch} from '../index';

export function* postClientRegister(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const clientRegister = yield ApiRegister.apiPostClientRegister(action.data);
    console.log('apiClientRegister -> ', clientRegister);

    const {data} = clientRegister;
    yield put({
      type: 'clientRegister',
      data,
    });

    const clientData = yield ApiPersonal.apiGetClientData({
      user: clientRegister.data,
    });
    console.log('apiClientData -> ', clientData);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'clientData',
      data: clientData.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiClientRegister');
  }
}

export function* postDoctorRegister(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const doctorRegister = yield ApiRegister.apiPostDoctorRegister(action.data);
    console.log('apiDoctorRegister -> ', doctorRegister);

    const {data} = doctorRegister;
    console.log(data);
    yield put({
      type: 'doctorRegister',
      data,
    });

    const doctorData = yield ApiPersonal.apiGetDoctorData({
      user: doctorRegister.data,
    });
    console.log('apiDoctorData -> ', doctorData);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'doctorData',
      data: doctorData.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiDoctorRegister');
  }
}
