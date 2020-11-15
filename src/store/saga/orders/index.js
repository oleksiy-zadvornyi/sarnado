import {put} from 'redux-saga/effects';

import * as Api from '../../api/orders';
import {_catch} from '../../../helpers';

export function* fetchPostOrders(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const orders = yield Api.postOrders(action.data);
    if (action.data.data.type === 'sell') {
      yield put({type: 'postOrdersSell', data: orders.data});
    } else {
      yield put({type: 'postOrdersBuy', data: orders.data});
    }
  } catch (error) {
    yield* _catch(error, 'postOrders');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
