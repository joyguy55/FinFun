export const mutations = {

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
        console.log("You must insert a valid color type!");
      }
    }
    return (typeObj[payload.type] || typeObj["default"])(payload)
  },

  selectStyle: (state, payload) => {
    const typeObj = {
      'scale': function(payload){
        state.selectedScaleStyle = state.scaleStyles[payload.styleIndex]
      },
      'fin': function(payload){
        state.selectedFinStyle = state.finStyles[payload.styleIndex]
      },
      'filter': function(payload){
        state.selectedFilter = state.filters[payload.filterIndex]
      },
      'default': function(){
        console.log("You must insert a valid style type!");
      }
    }
    return (typeObj[payload.type] || typeObj["default"])(payload)
  },

  setTailSizeRange: (state, payload) => {
    state.tailSizeRange = payload.size
  }

}
