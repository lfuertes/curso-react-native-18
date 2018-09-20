import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        house: null,
        onHousePress: () => {},
    }

    render() {
        const { house } = this.props
        const image = house.image_dir ? { uri: house.image_dir } : require('../../../resources/placeholder.jpg')
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onHousePress(house) } 
                style={styles.cellContainer}
            >
               <Image
                    source={image}
                    style={{ width: '100%', height: '100%'}}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
        )
    }
}