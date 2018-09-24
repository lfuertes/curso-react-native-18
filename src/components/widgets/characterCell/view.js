import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        character: null,
        onCharacterPress: () => {},
    }
    

    render() {
        const { character } = this.props
        const name = character ? character.nombre : ''
        const age = character ? character.edad : ''
        const image = character ? { uri: character.image_dir } : null
         return (
             <TouchableOpacity style={styles.container} onPress={() => this.props.onCharacterPress(character)}>
                <Image source={image} style={styles.image} resizeMode={'cover'}/>
                <View style={styles.detailContainer}>
                    <Text style={[styles.label, styles.name]}>{name}</Text>
                    <Text style={styles.label}>{age}</Text>
                </View>
             </TouchableOpacity>
         )
    }
}