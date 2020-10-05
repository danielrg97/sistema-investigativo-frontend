import reduxSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import rootSaga from './sagas';

const reducers = combineReducers({

});

const sagaMiddleware = reduxSaga();

const store = createStore(
    reducers, 
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(rootSaga);
export default store;