// import { ref, computed } from 'vue'

import { defineStore } from 'pinia'
import axios from 'axios'



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
  execute(config) {
    return axios(config);
  },
};


////////////////////////////////////////////////////////////////////////////////

export const useAxiosStore = defineStore('axios', {
  state, getters, actions,
})
