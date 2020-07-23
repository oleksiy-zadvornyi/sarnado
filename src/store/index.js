import React from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import configureStore from './config';

const {store, persistor} = configureStore();

export default class ReduxView extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}
