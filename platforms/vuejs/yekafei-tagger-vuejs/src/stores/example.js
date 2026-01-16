// import { ref, computed } from 'vue'

import { defineStore } from 'pinia'



const state = function () {
  const value1 = 1;
  return { value1 }
}


const getters = {

  getter1(state) {
    return state.foo;
  },

};


const actions = {

  action1() { },

};


////////////////////////////////////////////////////////////////////////////////

export const useExampleStore = defineStore('example', {
  state, getters, actions,
})
