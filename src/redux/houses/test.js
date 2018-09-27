
import * as HousesActions from './actions'
import reducer from './reducer'
import { createStore } from 'redux'

test('HousesActions.setItem', () => {
    let store = createStore(reducer)
    let house = { id: 1, nombre: 'Stark' }
  
    expect(store.getState().item).toEqual(null)
  
    store.dispatch(HousesActions.setItem(house))
    expect(store.getState().item).toEqual(house)

    store.dispatch(HousesActions.setItem(null))
    expect(store.getState().item).toEqual(null)
})