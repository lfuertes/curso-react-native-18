import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    cellContainer: {
        width: '50%',
        height: 300,
        backgroundColor: 'rgb(24,24,24)',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderColor: 'grey',
        borderWidth: 1
    }
})