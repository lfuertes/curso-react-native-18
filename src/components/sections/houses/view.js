import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class extends Component {

    constructor(props) {
        super(props)
        this.goToCharacters = this.goToCharacters.bind(this)
    }

    goToCharacters() {
        Actions.characters({ title: 'Personajes' })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{color: 'white', fontWeight: '600'}}>CASAS</Text>

                <Button 
                    title={'Pulsar para ir a Characters'} 
                    color={'red'} 
                    onPress={ this.goToCharacters } 
                />
            </View>
        )
    }
}
