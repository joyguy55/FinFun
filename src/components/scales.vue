<template>
  <div>
    <div class="options_container">

      <h5>Select Style</h5>

      <div :class="[ style.isActive ? 'styles_container active' : 'styles_container' ]" v-for="style in scaleStyles">
            <div class="styles_box">
                <img :src="style.image"
                     class="fin_choice img-responsive"
                     v-on:click="selectScaleStyle(style.id)">
            </div>
      </div>


    </div>

    <div class="options_container">

     <h5>Scale Colors</h5>

     <div class="color_option" v-for="color in selectedScaleStyle.colors">
      <div class="outer_circle"
           :value="color"
           :key="color"
           v-on:click="selectColorAtIndex(color)">
        <div class="inner_circle" :style="{background: color}"></div>
      </div>
     </div>

    <ColorPicker class="color_picker"
                  v-if="colorBox"
                 :colorBox.sync="colorBox"
                 :styleIndex="styleIndex"
                 :colorIndex="colorIndex"
                 :type="type"/>
    </div>
  </div>
</template>

<script>
  import _ from 'underscore'
  import ColorPicker from './sub/color_picker.vue'
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'navigation',
    components: {
      ColorPicker
    },
    data() {
      return {
        styleIndex: 0,
        colorIndex: 0,
        colorBox: false,
        image: 'https://www.finfunmermaid.com/images/custom-tails-assets/scale-1.png',
        type: 'scale'
      }
    },
    computed: {
      ...mapState({
        scaleStyles: state => state.scaleStyles,
        selectedScaleStyle: state => state.selectedScaleStyle
      })
    },
    methods: {
      selectScaleStyle: function(styleId) {
        let index = _.findIndex(this.scaleStyles, {
          id: styleId
        })
        this.styleIndex = index
        this.$store.dispatch( 'selectStyle', {
          type: this.type,
          styleIndex: this.styleIndex
        } )
      },
      selectColorAtIndex: function(color) {
        let index = this.selectedScaleStyle.colors.indexOf(color)
        this.colorIndex = index
        this.colorBox = true
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'scales.scss'
</style>
