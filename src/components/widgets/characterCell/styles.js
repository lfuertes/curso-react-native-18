import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgb(50,50,50)',
        marginVertical: 1
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    label: {
        color: 'white',
    },
    name: {
        fontWeight: 'bold',
        flex: 1,
    }
})