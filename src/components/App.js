import React, { Component } from 'react'
import { StatusBar, Platform } from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import * as api from '../api/'

export default class App extends Component {
 
    componentWillMount() {
        api.configureAxios()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="houses" component={Houses} hideNavBar={true} initial={true} />
                    <Scene key="characters" component={Characters} />
                </Stack>
            </Router>
        )
    }
}