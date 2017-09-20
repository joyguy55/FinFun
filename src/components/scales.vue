<template>
  <div>
    <div class="options_container">

      <h5>Select Style</h5>

      <div class="styles_container" v-for="style in scaleStyles">

        <div class="image_placeholder"></div>

        <div class="radio_container">
          <div class="radio">
            <input
            :id="style.id"
            type="radio"
            v-model="picked"
            :value="style.id"
            v-on:click="selectScaleStyle(style.id)">
          </div>
        </div>
      </div>


    </div>

    <div class="options_container">

     <h5>Scale Colors</h5>

     <div class="color_option" v-for="color in colors">
      <div class="outer_circle"
           :value="color"
           :key="color"
           v-on:click="selectColorIndex(color)">
        <div class="inner_circle"></div>
      </div>
     </div>

    </div>

    <ColorPicker :styleIndex="styleIndex" :colorIndex="colorIndex"/>

  </div>
</template>

<script>
import _ from 'underscore'
import ColorPicker from './sub/color_picker.vue'
import { mapState } from 'vuex'

export default {
  name: 'navigation',
  components: {
    ColorPicker
  },
  data () {
    return {
      picked: 1,
      colors: ["#003382","#FF3382","#484748","#287488","#2747ff","#9284ff"],
      styleIndex: 1,
      colorIndex: 0,
    }
  },
  computed: {
    ...mapState({
        scaleStyles: state => state.scaleStyles,
        selectedScaleStyle: state => state.selectedScaleStyle
    })
  },
  methods: {
    selectScaleStyle: function (styleId) {
      let index = _.findIndex(this.scaleStyles, { id: styleId})
      this.colors = this.scaleStyles[index].colors
      this.styleIndex = index
    },
    selectColorIndex: function (color) {
      let index = this.colors.indexOf(color)
      this.colorIndex = index
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'scales.scss'
</style>
