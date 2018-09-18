import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: 'green',
            title: 'Valor inicial',
        }
    }

    componentWillMount() {
        //this.setState({ backgroundColor: 'lime', title: 'Valor cambiado en componentWillMount' })
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                backgroundColor: 'red',
                title: 'Valor cambiado en componentDidMount'
            })
        }, 5000)
    }
   
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.state.backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 30}}>{this.state.title}</Text>
            </View>
        )
    }
}