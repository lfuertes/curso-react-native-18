import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Button } from '../../widgets/'

export default class extends React.Component {
    render() {
        const { character } = this.props
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
                    
                    <Button label={'EDITAR'} />
                    
                </View>
            </View>
        )
    }
}
