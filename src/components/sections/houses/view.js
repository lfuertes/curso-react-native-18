import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, Alert, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { HouseCell  } from '../../widgets/'
import styles from './styles'
import { connect } from 'react-redux'
import * as HousesActions from '../../../redux/houses/actions'

class Houses extends Component {

    componentDidMount() {
        this.props.fetchHousesList()
    }

    _onHouseTapped(house) {
        this.props.onHouseTapped(house)
    }

    _renderItem({ item }) {
        return ( 
            <HouseCell 
                house={item} 
                onHousePress={ v => this._onHouseTapped(v) } 
            />
        )
    }

    _renderActivityIndicator() {
        if(!this.props.isFetching) {
            return null
        }
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                <ActivityIndicator size={'large'} color={'white'} animating={true} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <FlatList
                    data={this.props.list}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    extraData={this.props}
                    numColumns={2}
                    style={{paddingTop: 40}}
                />

                { this._renderActivityIndicator() }     

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.houses.isFetching,
        list: state.houses.list,
    }
} 

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHousesList: () => {
            dispatch(HousesActions.fetchHousesList())
        },
        onHouseTapped: (house) => {
            dispatch(HousesActions.setItem(house))
            Actions.characters({ title: house.nombre })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Houses)