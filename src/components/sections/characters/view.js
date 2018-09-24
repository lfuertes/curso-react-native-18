import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'

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
        isFetching: state.characters.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHouseCharacters: () => {
            console.log("fetchHouseCharacters")
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
