import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class extends React.Component {
    render() {
        const { character } = this.props
        console.log("character: ", character)
        const image = character && character.image_dir ? { uri: character.image_dir } : null
        const age = character && character.edad ? character.edad : ''
        return (
            <View style={styles.container}>
                <Image source={image} resizeMode={'cover'} style={styles.image}/>
                <View style={styles.dataContainer}>
                    <Text style={styles.text}>{'Edad: '}</Text>
                    <Text style={styles.text}>{age}</Text>
                </View>
                <View style={{margin: 20}}>
                    <TouchableOpacity style={{ backgroundColor: 'rgb(80,80,80)', padding: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 14}}>
                        <Text style={{fontWeight: '600', color: 'white'}}>{'Editar'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
