import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import { Reducer } from './tools/reducer';

const store = createStore(Reducer);

const ReduxApp: React.FC = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default ReduxApp;