import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'
import { CharacterCell } from '../../widgets/'

class Characters extends Component {

    componentDidMount() {
        this.props.fetchHouseCharacters()
    }
    
    _renderItem(item, index) {
        return <CharacterCell character={item} />
    }

    render() {
        const { list, isFetching } = this.props
        console.log("list: ", list)
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={({ item, index}) => this._renderItem(item, index) }
                    keyExtractor={(item, i) => 'character' + i}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.characters.list,
        isFetching: state.characters.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHouseCharacters: () => {
            dispatch(CharactersActions.fetchHouseCharacters())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
