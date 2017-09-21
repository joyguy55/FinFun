import Vue from 'vue'
import Vuex from 'vuex'
import _  from 'underscore'
import { router } from '../main.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tailSizeRange: '',
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
      state.scaleStyles[payload.styleIndex].colors[payload.colorIndex] = payload.color
      state.selectedScaleStyle = state.scaleStyles[payload.styleIndex]
    },
    setTailSizeRange: (state, payload) => {
      state.tailSizeRange = payload.size
    }
  },
  actions: {
    changeColor: ({ commit }, payload) => {
      commit('changeColor', payload)
    },
    setTailSizeRange: ({ commit }, payload) => {
      commit('setTailSizeRange', payload)
      router.push("/customize/scales")
    }
  }
})
