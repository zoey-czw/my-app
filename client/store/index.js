import {createStore} from 'redux'

const initialState = {
  islogin: false,
}

const reducer = (state = initialState , action)=>{
  switch(action.type) {
    case 'login': 
      return {
        ...state,
        islogin: action.value
      };
      default: 
        return state
  }
}

const store = createStore(reducer)

export default store;