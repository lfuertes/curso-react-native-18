import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { Button, TextInput } from '../../widgets/'
import styles from './styles'
import ImagePicker from 'react-native-image-picker'

export default class extends Component {

    constructor(props) {
        super(props)

        if(props.isEdit && props.character) {
            this.state = {
                name: props.character.nombre,
                age: props.character.edad.toString(),
                image: { preview: {uri: props.character.image_dir }},
            }
        } else {
            this.state = {
                name: '',
                age: '',
                image: null,
            }
        }


        this.options = {
            title: 'Seleccionar imagen',
            maxWidth: 640,
            maxHeight: 640,
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };
    }

    _validateForm() {
        const {name, age, image} = this.state 
        if(name && age && image) {
            return true
        } else {
            return false
        }
    }

    _onSubmit() {
        if(this._validateForm()) {
            const {name, age, image} = this.state 
            if(this.props.isEdit) {
                const characterId = this.props.character.id
                const imageData = this.state.image.data ? { image: this.setState.iamge.data } : {}
                const data = {
                    ...imageData,
                    nombre: name,
                    edad: age, 
                }
                // FUNCION PARA HACER PATCH
                //this.props.onSubmitCharacter(data)
            } else {
                const data = {
                    nombre: name,
                    edad: age,
                    image: image.data, 

                }
                this.props.onSubmitCharacter(data)
            }
        } else {
            Alert.alert('Atención', 'Complete todos los campos')
        }
    }

    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.uri && response.data) {
              let preview = { uri: response.uri };
              let data = 'data:image/jpeg;base64,' + response.data 
              this.setState({
                image: { preview, data }
              });
            }
          });
    }

    _renderTextInput(label, key, placeholder = '') {
        return (
            <TextInput 
                label={label}
                value={this.state[key]}
                onChangeText={ v => this.setState({ [key]: v }) }
                placeholder={placeholder}
            />
        )
    }

    _renderImageInput() {
        const imageUri = this.state.image ? this.state.image.preview : null
        const imageLabel = this.state.image ? 'Pulsa para escoger otra imagen' : 'Pulsa para elegir imagen *'
        return (
            <View style={{marginTop: 20}}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={styles.image} resizeMode={'cover'} />
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
 
                <View style={{paddingTop: 40, padding: 20}}>
                    { this._renderTextInput('Nombre del personaje: *', 'name', 'Eddard Stark') }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    <TextInput 
                        label={'Edad del personaje: *'}
                        value={this.state.age}
                        onChangeText={ age => this.setState({ age }) }
                        placeholder={'32'}
                    />
                </View>
                
                <View style={{ paddingHorizontal: 20, paddingBottom: 40}}>
                    { this._renderImageInput() }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    <Button 
                        label={'Guardar'.toUpperCase()} 
                        onPress={() => this._onSubmit()} 
                        isFetching={this.props.isFetching} 
                    />
                </View>
 
            </View>
        )
    }
}