import Vue from 'vue'
import Vuex from 'vuex'
import _  from 'underscore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    scaleStyles: [
      { id: 1, colors: ["#003382","#FF3382","#484748","#287488","#2747ff","#9284ff"] },
      { id: 2, colors: ["#003382","#FF3382"] },
      { id: 3, colors: ["#003382","#FF3382","#484748","#287488"] },
      { id: 4, colors: ["#003382","#FF3382","#484748","#287488"] },
      { id: 5, colors: ["#003382","#FF3382","#484748","#287488"] }
    ],
    selectedScaleStyle: { id: 1, colors: ["#003382","#FF3382","#484748","#287488","#2747ff","#9284ff"] },
    finStyles: [],
    selectedFinStyle: {},
  },
  mutations: {
    changeColor: (state, payload) => {
      console.log(state)
      state.scaleStyles[payload.styleIndex].colors[payload.colorIndex] = payload.color
      state.selectedScaleStyle = state.scaleStyles[payload.styleIndex]
    }
  },
  actions: {
    changeColor: ({ commit }, payload) => {
      commit('changeColor', payload)
    }
  }
})
