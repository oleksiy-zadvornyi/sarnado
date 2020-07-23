import {put} from 'redux-saga/effects';

import * as ApiVideos from '../../api/videos';
import {_catch} from '../index';
import {goBack} from '../../../helpers/navigation';

export function* getVideos(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const videos = yield ApiVideos.apiGetVideos(action.data);
    console.log('apiVideos -> ', videos);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'videos',
      data: videos.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiVideos');
  }
}

export function* postVideosNew(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const videos = yield ApiVideos.apiPostVideosNew(action.data);
    console.log('apiVideos -> ', videos);

    yield put({type: 'networkIndicator', data: false});

    for (let i = 0; i < action.data.goBack; i++) {
      goBack();
    }

    yield put({type: 'reducerYourRequestHasBeenSent'});
  } catch (error) {
    yield* _catch(error, 'apiVideosNew');
  }
}

export function* putVideosIdStart(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    yield ApiVideos.apiPutVideosIdStart(action.data);

    yield put({type: 'networkIndicator', data: false});
  } catch (error) {
    yield* _catch(error, 'apiVideosNew');
  }
}

export function* putVideosIdCancel(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    yield ApiVideos.apiPutVideosIdCancel(action.data);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'videosCancel',
      data: action.data.path,
    });
  } catch (error) {
    yield* _catch(error, 'apiVideosIdCancel');
  }
}

export function* putVideosIdConfirm(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    yield ApiVideos.apiPutVideosIdConfirm(action.data);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'videosConfirm',
      data: action.data.path,
    });
  } catch (error) {
    yield* _catch(error, 'apiVideosIdConfirm');
  }
}

export function* putVideosIdDone(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    yield ApiVideos.apiPutVideosIdDone(action.data);

    yield put({type: 'networkIndicator', data: false});
  } catch (error) {
    yield* _catch(error, 'apiVideosIdDone');
  }
}
