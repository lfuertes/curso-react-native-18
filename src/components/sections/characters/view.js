import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'

class Characters extends Component {

    componentDidMount() {
        this.props.fetchHouseCharacters()
    }
    
    render() {
        return (
            <View style={styles.container}>
            
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {

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
