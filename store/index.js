import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'this is store message!',
        counter: 0
      }
    },
    mutations: {
      count: function (state, n) {
        state.counter += n
      },
      reset: function (state) {
        state.counter = 0
      }
    }
  })
}

export default createStore
