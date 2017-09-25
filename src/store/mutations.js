export const mutations = {

  changeColor: (state, payload) => {
    switch(payload.type){

      case 'scale':
        state.scaleStyles[payload.styleIndex].colors[payload.colorIndex] = payload.color
        const scaleObj = _.cloneDeep(state.scaleStyles[payload.styleIndex])
        state.selectedScaleStyle = scaleObj
      break

      case 'fin':
        state.finStyles[payload.styleIndex].colors[payload.colorIndex] = payload.color
        const finObj = _.cloneDeep(state.finStyles[payload.styleIndex])
        state.selectedFinStyle = finObj
      break

      case 'default':
        console.log("You must insert a valid color type!");
      break

    }
  },

  selectStyle: (state, payload) => {
    switch(payload.type){

      case 'scale':
        state.selectedScaleStyle = state.scaleStyles[payload.styleIndex]
      break

      case 'fin':
        state.selectedFinStyle = state.finStyles[payload.styleIndex]
      break

      case 'filter':
        state.selectedFilter = state.filters[payload.filterIndex]
      break

      case 'default':
        console.log("You must insert a valid color type!");
      break

    }
  },

  selectSticker: (state, payload) => {
    state.selectedStickers[payload.index].image = state.stickers[payload.id].image
  },

  setTailSizeRange: (state, payload) => {
    state.tailSizeRange = payload.size
  }

}
