import {put} from 'redux-saga/effects';

import * as ApiNotifications from '../../api/notifications';
import {_catch} from '../index';
import {goBack} from '../../../helpers/navigation';

export function* getNotifications(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const notifications = yield ApiNotifications.apiGetNotifications(
      action.data,
    );
    console.log('apiNotifications -> ', notifications);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'notifications',
      data: notifications.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiNotifications');
  }
}

export function* putNotifications(action) {
  try {
    yield ApiNotifications.apiPutNotifications(action.data);

    yield put({
      type: 'notifyReaded',
      data: action.data.path,
    });
  } catch (error) {
    yield* _catch(error, 'apiNotifications');
  }
}

export function* deleteNotifications(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const notifications = yield ApiNotifications.apiDeleteNotifications(
      action.data,
    );
    console.log('apiNotifications -> ', notifications);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'notifyDelete',
      data: action.data.path,
    });

    goBack();
  } catch (error) {
    yield* _catch(error, 'apiNotifications');
  }
}

export function* fetchNotify(action) {
  try {
    const {notify} = action;

    if (notify.extra.cito) {
      yield put({
        type: 'reducerBookingConfirmed',
        id: notify.extra.id,
      });
    } else {
      yield put({
        type: 'reducerCallConfirmed',
      });
    }
  } catch (error) {
    yield* _catch(error, 'apiNotifications');
  }
}
