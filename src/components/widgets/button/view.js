import React, {Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        label: 'Guardar',
        onPress: () => {},
        isFetching: false,
    }

    _onPress() {
        if(!this.props.isFetching) {
            this.props.onPress()
        }
    }

    _renderContent() {
        if(this.props.isFetching) {
            return <Spinner color={'#FFF'} size={20} type={'ChasingDots'} />
        } else {
            return <Text style={styles.buttonText}>{this.props.label}</Text>
        }
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={ () => this._onPress() }
                activeOpacity={ this.props.isFetching ? 1 : 0.2 }
            >
                { this._renderContent() }
            </TouchableOpacity>
        )
    }
}