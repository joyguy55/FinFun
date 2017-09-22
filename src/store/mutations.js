export const mutations = {

  changeColor: (state, payload) => {
    const typeObj = {
      'scale': function(payload){
        state.scaleStyles[payload.styleIndex].colors[payload.colorIndex] = payload.color
        const deepObj = _.cloneDeep(state.scaleStyles[payload.styleIndex])
        console.log(deepObj)
        state.selectedScaleStyle = deepObj
      },
      'fin': function(payload){
        console.log('fin')
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

  selectSticker: (state, payload) => {
    state.selectedStickers[payload.index].image = state.stickers[payload.id].image
  },

  setTailSizeRange: (state, payload) => {
    state.tailSizeRange = payload.size
  }

}
