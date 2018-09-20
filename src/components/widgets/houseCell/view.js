import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        house: null,
        seleccionada: null,
        onHousePress: () => {},
    }

    render() {
        const { house, seleccionada } = this.props
        const name = house ? house.nombre : ''
        const isSelected = seleccionada && seleccionada.id == house.id ? true : false
        const backgroundColor = isSelected ? 'lime' : 'green'

        return (
            <TouchableOpacity 
                onPress={ () => this.props.onHousePress(house) } 
                style={[styles.cellContainer, { backgroundColor: backgroundColor}]}
            >
                <Text>{name}</Text>
            </TouchableOpacity>
        )
    }
}