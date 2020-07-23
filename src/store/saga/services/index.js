import {put} from 'redux-saga/effects';

import * as ApiServices from '../../api/services';
import {_catch} from '../index';
import {goBack} from '../../../helpers/navigation';

export function* getServices(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const services = yield ApiServices.apiGetServices(action.data);
    console.log('apiGetServices -> ', services);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'services',
      data: services.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiGetServices');
  }
}

export function* postServicesId(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const services = yield ApiServices.apiPostServicesId(action.data);
    console.log('apiPostServicesId -> ', services);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'serviceEdit',
      data: action.data,
    });
    goBack();
  } catch (error) {
    yield* _catch(error, 'apiPostServicesId');
  }
}

export function* deleteServicesId(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const services = yield ApiServices.apiDeleteServicesId(action.data);
    console.log('deleteServicesId -> ', services);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'serviceRemove',
      data: action.data.path,
    });
  } catch (error) {
    yield* _catch(error, 'deleteServicesId');
  }
}

export function* postServicesNew(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const services = yield ApiServices.apiPostServicesNew(action.data);
    console.log('postServicesNew -> ', services);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'serviceNew',
      data: services.data,
      actionData: action.data.data,
    });

    goBack();
  } catch (error) {
    yield* _catch(error, 'postServicesNew');
  }
}
