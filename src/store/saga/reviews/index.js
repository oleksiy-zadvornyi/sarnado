import {put} from 'redux-saga/effects';

import * as ApiReviews from '../../api/reviews';
import {_catch} from '../index';

export function* getReviewsMy(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const reviews = yield ApiReviews.apiGetReviewsMy(action.data);
    console.log('apiReviewsMy -> ', reviews);

    yield put({type: 'networkIndicator', data: false});

    const {data} = reviews;
    const {page} = action.data.path;
    if (page > 1) {
      yield put({
        type: 'reviewsMyAdd',
        data,
        page,
      });
    } else {
      yield put({
        type: 'reviewsMy',
        data,
      });
    }
  } catch (error) {
    yield* _catch(error, 'apiReviewsMy');
  }
}

export function* getReviewsFrom(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const reviews = yield ApiReviews.apiGetReviewsFrom(action.data);
    console.log('apiReviewsFrom -> ', reviews);

    yield put({type: 'networkIndicator', data: false});

    const {data} = reviews;
    const {page} = action.data.path;
    if (page > 1) {
      yield put({
        type: 'reviewsFromAdd',
        data,
        page,
      });
    } else {
      yield put({
        type: 'reviewsFrom',
        data,
      });
    }
  } catch (error) {
    yield* _catch(error, 'apiReviewsFrom');
  }
}

export function* postReviewsId(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const reviews = yield ApiReviews.apiPostReviewsId(action.data);
    console.log('apiReviewsId -> ', reviews);

    yield put({type: 'reducerFromAdd', data: reviews.data});

    yield put({type: 'networkIndicator', data: false});

    yield put({type: 'reduceOnPressClose'});
  } catch (error) {
    yield* _catch(error, 'apiReviewsId');
  }
}
