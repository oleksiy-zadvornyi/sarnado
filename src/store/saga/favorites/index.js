import {put} from 'redux-saga/effects';

import * as ApiFavorites from '../../api/favorites';
import {_catch} from '../index';

export function* getFavorites(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const favorites = yield ApiFavorites.apiGetFavorites(action.data);
    console.log('apiFavorites -> ', favorites);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'favorites',
      data: favorites.data,
    });
  } catch (error) {
    yield* _catch(error, 'apiFavorites');
  }
}

export function* putFavoritesId(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const favorites = yield ApiFavorites.apiPutFavorites(action.data);
    console.log('apiFavoritesId -> ', favorites);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'addFavorite',
      data: favorites.data,
    });

    yield put({
      type: 'updateFavorite',
      data: action.data,
      favourite: true,
    });
  } catch (error) {
    yield* _catch(error, 'apiFavoritesId');
  }
}

export function* deleteFavoritesId(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const favorites = yield ApiFavorites.apiDeleteFavorites(action.data);
    console.log('apiFavoritesId -> ', favorites);

    yield put({type: 'networkIndicator', data: false});

    yield put({
      type: 'removeFavorite',
      data: action.data.path,
    });

    yield put({
      type: 'updateFavorite',
      data: action.data,
      favourite: false,
    });
  } catch (error) {
    yield* _catch(error, 'apiFavoritesId');
  }
}
