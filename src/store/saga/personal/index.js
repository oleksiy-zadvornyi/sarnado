import {put} from 'redux-saga/effects';

import * as ApiPersonal from '../../api/personal';
import * as ApiDoctor from '../../api/doctor';
import {_catch} from '../index';

export function* putClientData(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const {user, base64, contentType} = action.data;
    let {data} = action.data;
    if (base64) {
      const userPhoto = yield ApiPersonal.apiPostUserPhoto({
        data: base64,
        contentType,
        user,
      });
      data = {...data, photoId: userPhoto.data.id};
    }

    const clientData = yield ApiPersonal.apiPutClientData({data, user});
    console.log('apiClientData -> ', clientData);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'clientData',
      data: clientData.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiClientData');
  }
}

export function* putDoctorData(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const {user, base64, contentType} = action.data;
    const {schedule} = action.data.data;
    let {data} = action.data;
    if (base64) {
      const userPhoto = yield ApiPersonal.apiPostUserPhoto({
        data: base64,
        contentType,
        user,
      });
      data = {...data, photoId: userPhoto.data.id};
    }

    let scheduleActionData = {};
    if (schedule.from) {
      scheduleActionData = {
        ...scheduleActionData,
        from: schedule.from,
      };
    }
    if (schedule.to) {
      scheduleActionData = {
        ...scheduleActionData,
        to: schedule.to,
      };
    }

    console.log(scheduleActionData);

    const scheduleData = yield ApiDoctor.apiPostDoctorSchedule({
      user,
      data: scheduleActionData,
    });
    console.log('apiPostDoctorSchedule -> ', scheduleData);

    yield put({
      type: 'scheduleData',
      data: scheduleData.data,
    });

    const doctorData = yield ApiPersonal.apiPutDoctorData({data, user});
    console.log('apiDoctorData -> ', doctorData);

    yield put({
      type: 'doctorData',
      data: doctorData.data,
    });

    yield put({type: 'networkIndicator', data: false});
  } catch (error) {
    yield* _catch(error, 'apiDoctorData');
  }
}

export function* getSpecializations(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const specializations = yield ApiPersonal.apiGetSpecializations();
    console.log('apiSpecializations -> ', specializations);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'specializations',
      data: specializations.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiSpecializations');
  }
}
