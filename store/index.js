import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'this is store message!',
        counter: 0
      }
    }
  })
}

export default createStore
