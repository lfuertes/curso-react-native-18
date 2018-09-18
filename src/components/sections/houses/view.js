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
        Alert.alert('Casa:', house.nombre)
    }

    _renderItem({ item }) {
        return <HouseCell house={item} onHousePress={ v => this._onHouseTapped(v) } />
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.housesList}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                />
            </View>
        )
    }
}

class HouseCell extends Component {

    static defaultProps = {
        house: null,
        onHousePress: () => {},
    }

    render() {
        const { house } = this.props
        const name = house ? house.nombre : ''
        return (
            <TouchableOpacity onPress={ () => this.props.onHousePress(house) } style={{height: 120, borderWidth: 1, borderColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
                <Text>{name}</Text>
            </TouchableOpacity>
        )
    }
}