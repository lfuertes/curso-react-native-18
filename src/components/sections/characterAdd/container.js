import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'
import View from './view'

const mapStateToProps = (state) => {
    return {
        house: state.houses.item,
        isFetching: state.characters.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmitCharacter: (data) => {
            dispatch(CharactersActions.postHouseCharacter(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)