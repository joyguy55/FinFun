import Vue from 'vue'
import Vuex from 'vuex'
import _  from 'lodash'
import { router } from '../main.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

    tailSizeRange: '',

    scaleStyles: [
      { id: 1,
        colors: ["#003382","#FF3382","#484748","#287488","#2747ff","#9284ff"] },
      { id: 2,
        colors: ["#003382","#FF3382"] },
      { id: 3,
        colors: ["#003382","#FF3382","#484748","#287488"] },
      { id: 4,
        colors: ["#003382","#FF3382","#484748","#287488"] },
      { id: 5,
        colors: ["#003382","#FF3382","#484748","#287488"] }
    ],

    selectedScaleStyle: { id: 1, colors: ["#003382","#FF3382","#484748","#287488","#2747ff","#9284ff"] },

    finStyles: [
       { id: 1,
         colors: ["#003382","#FF3382","#484748"],
         image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-1.svg'
       },
       {  id: 2,
          colors: ["#003382","#FF3382"],
          image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-2.svg'
       },
       {  id: 3,
          colors: ["#003382","#FF3382","#484748"],
          image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-3.svg'
       },
       {  id: 4,
          colors: ["#003382","#FF3382","#484748","#287488"],
          image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-4.svg'
       }
    ],

    selectedFinStyle: { id: 1,
                        colors: ["#003382","#FF3382","#484748"],
                        image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-1.svg'
                      },
  },

  mutations: {

    changeColor: (state, payload) => {
      const typeObj = {
        'scale': function(payload){
          state.scaleStyles[payload.styleIndex].colors[payload.colorIndex] = payload.color
          const deepObj = _.cloneDeep(state.scaleStyles[payload.styleIndex])
          state.selectedFinStyle = deepObj
        },
        'fin': function(payload){
          state.finStyles[payload.styleIndex].colors[payload.colorIndex] = payload.color
          const deepObj = _.cloneDeep(state.finStyles[payload.styleIndex])
          state.selectedFinStyle = deepObj
        },
        'default': function(){
          console.log("You must insert a valid type!");
        }
      }
      return (typeObj[payload.type] || obj["default"])(payload)
    },

    selectStyle: (state, payload) => {
      const typeObj = {
        'scale': function(payload){
          state.selectedScaleStyle = state.scaleStyles[payload.styleIndex]
        },
        'fin': function(payload){
          state.selectedFinStyle = state.finStyles[payload.styleIndex]
        },
        'default': function(){
          console.log("You must insert a valid type!");
        }
      }
      return (typeObj[payload.type] || obj["default"])(payload)
    },

    setTailSizeRange: (state, payload) => {
      state.tailSizeRange = payload.size
    }

  },

  actions: {
    selectStyle: ({ commit }, payload) => {
      commit('changeColor', payload)
    },
    changeColor: ({ commit }, payload) => {
      commit('changeColor', payload)
    },
    setTailSizeRange: ({ commit }, payload) => {
      commit('setTailSizeRange', payload)
      // router.push("/customize/scales")
    }
  }

})
