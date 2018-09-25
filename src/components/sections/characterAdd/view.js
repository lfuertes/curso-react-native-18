import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Button, TextInput } from '../../widgets/'
import styles from './styles'
import ImagePicker from 'react-native-image-picker'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
        }

        this.options = {
            title: 'Seleccionar imagen',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };
    }

    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
                console.log('response: ', response);
              let source = { uri: response.uri };
          
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source
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
        const imageUri = this.state.avatarSource ? { uri: this.state.avatarSource.uri } : null
        return (
            <View>
                <TouchableOpacity style={{}} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={{ width: 200, height: 200 }} resizeMode={'contain'} />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{'Pulsa para elegir imagen'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
 
                <View style={{paddingTop: 40, padding: 20}}>
                    { this._renderTextInput('Nombre del personaje', 'name', 'Eddard Stark') }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    <TextInput 
                        label={'Edad del personaje:'}
                        value={this.state.age}
                        onChangeText={ age => this.setState({ age }) }
                        placeholder={'32'}
                    />
                </View>
                
                <View style={{ paddingHorizontal: 20, paddingBottom: 40}}>
                    { this._renderImageInput() }
                </View>

                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    <Button label={'Guardar'.toUpperCase()} />
                </View>
 
            </View>
        )
    }
}