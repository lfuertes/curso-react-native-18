import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
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
    }

    _renderItem({ item }) {
        return ( 
            <HouseCell 
                house={item} 
                onHousePress={ v => this._onHouseTapped(v) } 
            />
        )
    }

    render() {
        console.log("this.props: ", this.props)
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    extraData={this.state}
                    numColumns={2}
                    style={{paddingTop: 40}}
                />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Houses)