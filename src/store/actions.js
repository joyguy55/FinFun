export const actions = {

  selectStyle: ({ commit }, payload) => {
    commit('selectStyle', payload)
  },

  changeColor: ({ commit }, payload) => {
    commit('changeColor', payload)
  },

  setTailSizeRange: ({ commit }, payload) => {
    commit('setTailSizeRange', payload)
    // router.push("/customize/scales")
  }

}
