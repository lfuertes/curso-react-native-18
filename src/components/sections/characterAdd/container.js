import { connect } from 'react-redux'
import View from './view'

const mapStateToProps = (state) => {
    return {
        house: state.houses.item,
        isFetching: state.characters.isFetching || state.houses.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)