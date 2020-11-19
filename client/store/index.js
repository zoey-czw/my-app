import {createStore,combineReducers} from 'redux'
import mine from './modules/mine'

const reducer = combineReducers({
  mine,
})

const store = createStore(reducer)

export default store;