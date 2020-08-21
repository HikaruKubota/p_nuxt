import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'this is store message!'
      }
    }
  })
}

export default createStore
