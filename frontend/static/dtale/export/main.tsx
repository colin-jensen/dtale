import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../../i18n';
import * as actions from '../../redux/actions/dtale';
import appReducers from '../../redux/reducers/app';
import { AppState } from '../../redux/state/AppState';
import { createAppStore } from '../../redux/store';
import { DataResponseContent } from '../../repository/DataRepository';

import { ServerlessDataViewer } from './ServerlessDataViewer';

require('../../publicPath');

const store = createAppStore<AppState>(appReducers);
store.dispatch(actions.init());
actions.loadBackgroundMode(store);
ReactDOM.render(
  <Provider store={store}>
    <ServerlessDataViewer response={(global as any).RESPONSE! as DataResponseContent} />
  </Provider>,
  document.getElementById('content'),
);
