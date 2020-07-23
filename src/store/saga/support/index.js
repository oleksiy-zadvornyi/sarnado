import {put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import * as ApiSupport from '../../api/support';
import {_catch} from '../index';
import {goBack, navigate} from '../../../helpers/navigation';

export function* postSupport(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const support = yield ApiSupport.apiPostSupport(action.data);
    console.log(support);

    yield put({type: 'networkIndicator', data: false});

    const {chatId, user} = support.data;
    navigate('Message', {isSupport: true, chatId, user});
  } catch (error) {
    yield* _catch(error, 'apiPostServicesId');
  }
}
