import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{padding: 20}}>
                    <Text style={{color: 'white'}}>{'Nombre del personaje:'}</Text>
                    <TextInput 
                        onChangeText={ name => this.setState({ name }) }
                        value={this.state.name}
                        style={{backgroundColor: 'white'}}
                    />
                </View>
            </View>
        )
    }
}