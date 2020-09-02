import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSecureStore from 'redux-persist-expo-securestore';
import createSagaMiddleware from 'redux-saga';

import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';
import saga from './saga';

const storage = createSecureStore();

const config = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user', 'profile'],
};

const reducer = persistReducer(config, reducers);
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(saga);
  return {persistor, store};
}
