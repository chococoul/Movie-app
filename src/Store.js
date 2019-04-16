import {createStore, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from './reducers'

            const middleware =[Thunk]
            const initialState = {}
            const store =createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

            export default store