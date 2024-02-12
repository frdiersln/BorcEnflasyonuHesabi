import { createStore } from 'vuex'

interface State {
  //state is here
}

const store = createStore<State>({
  state: {
    //state is here
    //for example: count: 0
  },
  mutations: {
    //mutations are here
    //for example:
    // increment(state) {
    //   state.count++
    // }
  },
})

export default store