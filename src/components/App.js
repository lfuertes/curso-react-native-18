import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import * as api from '../api/'

export default class App extends Component {
 
    componentWillMount() {
        api.configureAxios()
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="houses" component={Houses} title="Casas" initial={true} />
                    <Scene key="characters" component={Characters} />
                </Stack>
            </Router>
        )
    }
}