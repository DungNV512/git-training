import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, undefined,
    compose(
        applyMiddleware(sagaMiddleware),
        devToolsEnhancer ? devToolsEnhancer() : (f) => f),
);

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <App
            users={store.getState().users}
            onLoadDataFromAPI={() => action('ON_LOAD_DATA_FROM_API')}/>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
