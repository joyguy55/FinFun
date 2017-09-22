import Vue from 'vue'
import Vuex from 'vuex'
import _  from 'lodash'
import { router } from '../main.js'
import { mutations } from './mutations.js'
import { actions } from './actions.js'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export const store = new Vuex.Store({

  plugins: [createLogger({
    collapsed: false,
  })],

  mutations: mutations,
  actions: actions,

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

    filters: [
      { id: 1,
        image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-1.png" },
      { id: 2,
        image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-2.png" },
      { id: 3,
        image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-3.png" },
      { id: 4,
        image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-4.png" },
      { id: 5,
        image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-5.png" }
    ],

    selectedFilter: {},

    stickers: [

    ],

    selectedStickers: {},

  },

})
