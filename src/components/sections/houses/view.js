import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as api from '../../../api/'
import styles from './styles'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            housesList: [],
            selected: null,
        }
    }

    componentDidMount() {
        this._fetchHousesList()
    }

    _fetchHousesList() {
        api.fetchHouses().then( response => {
            //console.log("fetchHouses response: ", response)
            this.setState({ housesList: response.data.records })
        }).catch( error => {
            console.log("fetchHouses error: ", error)
            this.setState({ housesList: [] })
        })
    }

    _onHouseTapped(house) {
        this.setState({ selected: house })
    }

    _renderItem({ item }) {
        return ( 
            <HouseCell 
                house={item} 
                onHousePress={ v => this._onHouseTapped(v) } 
                seleccionada={this.state.selected}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.housesList}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    extraData={this.state}
                />
            </View>
        )
    }
}

class HouseCell extends Component {

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
                style={{
                    height: 120,
                    borderWidth: 1, 
                    borderColor: 'blue', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: backgroundColor,
                }}
            >
                <Text>{name}</Text>
            </TouchableOpacity>
        )
    }
}