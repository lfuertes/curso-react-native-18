import React, { Component } from 'react'
import { StatusBar, Platform } from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import * as api from '../api/'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk' 

import * as reducers from '../redux/'
const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default class App extends Component {
 
    componentWillMount() {
        api.configureAxios()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="houses" component={Houses} hideNavBar={true} initial={true} />
                        <Scene key="characters" component={Characters} />
                    </Stack>
                </Router>
            </Provider>
        )
    }
}