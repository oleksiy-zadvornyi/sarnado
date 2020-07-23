import {put} from 'redux-saga/effects';

import * as ApiChats from '../../api/chats';
import {_catch} from '../index';

export function* getChats(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const chats = yield ApiChats.apiGetChats(action.data);
    console.log('apiChats -> ', chats);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'chats',
      data: chats.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiChats');
  }
}

export function* postChatsId(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const chatsId = yield ApiChats.apiPostChatsId(action.data);
    console.log('apiChatsId -> ', chatsId);

    yield put({type: 'networkIndicator', data: false});

    if (chatsId.data.messages.length > 0) {
      yield put({
        type: 'chatsId',
        data: chatsId.data.messages.map((e) => {
          return {
            ...e,
            user: {
              _id: e.userId,
            },
          };
        }),
        path: action.data.path,
      });
    }
  } catch (error) {
    yield* _catch(error, 'apiChatsId');
  }
}
