import {put} from 'redux-saga/effects';
import {Linking} from 'react-native';

import * as ApiBalance from '../../api/balance';
import {_catch} from '../index';

export function* getBalance(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const balance = yield ApiBalance.apiGetPaymentBalance(action.data);
    console.log('apiPaymentBalance -> ', balance);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'balance',
      data: balance.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiPaymentBalance');
  }
}

export function* getTransactions(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const transactions = yield ApiBalance.apiGetPaymentTransactions(
      action.data,
    );
    console.log('apiPaymentTransactions -> ', transactions);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'transactions',
      data: transactions.data,
      path: action.data.path,
    });
  } catch (error) {
    yield* _catch(error, 'apiPaymentTransactions');
  }
}

export function* postRefill(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const refill = yield ApiBalance.apiPostPaymentRefill(action.data);
    console.log('apiPaymentTransactions -> ', refill);

    yield put({type: 'networkIndicator', data: false});

    const {success, url} = refill.data;
    if (success) {
      Linking.canOpenURL(url).then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      });
    }

    yield put({type: 'reduceOnPressClose'});
  } catch (error) {
    yield* _catch(error, 'apiPaymentTransactions');
  }
}

export function* putTransfer(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const refill = yield ApiBalance.apiPutPaymentTransfer(action.data);
    console.log('apiPaymentTransfer -> ', refill);

    yield put({type: 'networkIndicator', data: false});
  } catch (error) {
    yield* _catch(error, 'apiPaymentTransfer');
  }
}

export function* putVideoIdPayment(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const payment = yield ApiBalance.apiPutVideoIdPayment(action.data);
    console.log('apiPutVideoIdPayment -> ', payment);

    yield put({type: 'networkIndicator', data: false});

    const {success, url} = payment.data;
    if (success) {
      Linking.canOpenURL(url).then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      });
    }

    yield put({type: 'reduceOnPressClose'});
  } catch (error) {
    yield* _catch(error, 'apiPutVideoIdPayment');
  }
}

export function* postTransfer(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const payment = yield ApiBalance.apiPostPaymentTransfer(action.data);
    console.log('apiPostPaymentTransfer -> ', payment);

    yield put({type: 'networkIndicator', data: false});

    yield put({type: 'balance', data: payment.data.balance});
    yield put({type: 'reduceOnPressClose'});
  } catch (error) {
    yield* _catch(error, 'apiPostPaymentTransfer');
  }
}

export function* postPayout(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const payment = yield ApiBalance.apiPostPaymentPayout(action.data);
    console.log('apiPostPaymentPayout -> ', payment);

    yield put({type: 'networkIndicator', data: false});

    yield put({type: 'balance', data: payment.data.balance});
    yield put({type: 'reduceOnPressClose'});
  } catch (error) {
    yield* _catch(error, 'apiPostPaymentPayout');
  }
}
