import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import {put, all} from 'redux-saga/effects';
import {workTime} from './constants';

export function* _catch(error, title) {
  console.log(`${title} ->`, error.response);
  if (error.response) {
    switch (error.response.status) {
      case 401: {
        yield put({type: 'postLogout'});
        return;
      }
      case 422: {
        const {errors} = error.response.data;
        for (const prop in errors) {
          yield all(errors[prop].map((e) => put({type: 'toast', data: e})));
        }
        return;
      }
      default: {
        yield put({type: 'toast', data: error.response.data.message});
      }
    }
  } else {
    console.log(`${title} ->`, error);
    yield put({type: 'toast', data: error.message});
  }
}

export function _fetchError(props, error, title) {
  console.log(`${title} ->`, error.response);
  const {showToast, reducePostLogout} = props;
  if (error.response) {
    switch (error.response.status) {
      case 401: {
        reducePostLogout();
        return;
      }
      case 422: {
        const {errors} = error.response.data;
        let errs = [];
        for (const prop in errors) {
          errors[prop].forEach((e) => showToast(e));
          errs = [...errs, prop];
        }
        return errs;
      }
      default: {
        showToast(error.response.data.message);
      }
    }
  } else {
    console.log(`${title} ->`, error);
    showToast(error.message);
  }
}

export function isPositiveNumber(value) {
  if (value.length === 0) {
    return false;
  } else if (!isNaN(value)) {
    if (parseFloat(value) >= 0) {
      return true;
    }
  }
  return false;
}

export function getFrom(indexes) {
  if (indexes.length === 0) {
    return null;
  }
  const min = Math.min(...indexes);
  return workTime.filter((e) => e.id === min)[0];
}

export function getTill(indexes) {
  if (indexes.length === 0) {
    return null;
  }
  const max = Math.max(...indexes);
  return workTime.filter((e) => e.id === max)[0];
}

export async function registerForPushNotificationsAsync(userId) {
  let experienceId;
  if (!Constants.manifest) {
    experienceId = userId;
  }
  const expoPushToken = await Notifications.getExpoPushTokenAsync({
    experienceId,
  });
  return expoPushToken;
}
