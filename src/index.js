import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {applyMiddleware, createStore} from 'redux'
import Reducer from './Redux'
import {Provider} from 'react-redux';
import logger from 'redux-logger'


const store = createStore(Reducer,applyMiddleware(logger))


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'))
