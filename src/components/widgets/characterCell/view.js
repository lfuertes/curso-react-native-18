import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable';

export default class extends Component {

    static defaultProps = {
        index: 0,
        character: null,
        onCharacterPress: () => {},
    }
    

    render() {
        const { character, index } = this.props
        const name = character ? character.nombre : ''
        const age = character ? character.edad : ''
        const image = character ? { uri: character.image_dir } : null
        const animation = index % 2 ? 'bounceInLeft' : 'bounceInRight'
         return (
             <Animatable.View animation={animation}>
                <TouchableOpacity style={styles.container} onPress={() => this.props.onCharacterPress(character)}>
                    <Image source={image} style={styles.image} resizeMode={'cover'}/>
                    <View style={styles.detailContainer}>
                        <Text style={[styles.label, styles.name]}>{name}</Text>
                        <Text style={styles.label}>{age}</Text>
                    </View>
                </TouchableOpacity>
             </Animatable.View>
         )
    }
}