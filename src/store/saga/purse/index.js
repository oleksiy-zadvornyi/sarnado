import {put} from 'redux-saga/effects';

import * as Api from '../../api/purse';
import {_catch} from '../../../helpers';

export function* fetchGetPurseGetAll(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const purse = yield Api.getPurseGetAll(action.data);
    console.log('getPurseGetAll -> ', purse);
    yield put({type: 'getPurseGetAll', data: purse.data});
  } catch (error) {
    yield* _catch(error, 'getPurseGetAll');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
