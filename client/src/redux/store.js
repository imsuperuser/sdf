import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools }  from 'redux-devtools-extension'
import heroReducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore( heroReducer, composeWithDevTools( applyMiddleware(thunk) ));

export default store;