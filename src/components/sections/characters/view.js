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
    console.log("state: ", state)
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHouseCharacters: () => {
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
