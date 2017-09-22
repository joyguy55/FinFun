<template>

  <div class="options_container">

    <div class="styles_container" v-for="style in finStyles">
      <div class="styles_box">
        <img :src="style.image" class="fin_choice">
      </div>
      <div class="styles_radio">
        <input :id="style.id" type="radio"
                v-model="picked"
                :value="style.id"
                v-on:click="selectScaleStyle(style.id)">
      </div>
    </div>

    <div class="color_option" v-for="color in selectedFinStyle.colors">
      <div class="outer_circle">
        <div :style="{background: color}"
             class="inner_circle"
             v-on:click="selectColorAtIndex(color)"></div>
      </div>
    </div>

    <ColorPicker v-if="colorBox"
                 :type="type"
                 :colorBox.sync="colorBox"
                 :styleIndex="styleIndex"
                 :colorIndex="colorIndex"/>

  <button id="button_override" class="btn btn-default btn-xs">Default</button>
<small>*suggested fin colors default to scale color selections</small>

</div>
</template>

<script>
  import _ from 'underscore'
  import { mapState, mapActions } from 'vuex'
  import ColorPicker from './sub/color_picker'

  export default {
    name: 'navigation',
    data() {
      return {
        picked: 1,
        styleIndex: 0,
        colorIndex: 0,
        colorBox: false,
        type: 'fin',
      }
    },
    components: {
      ColorPicker: ColorPicker
    },
    computed: {
      ...mapState({
        finStyles: state => state.finStyles,
        selectedFinStyle: state => state.selectedFinStyle
      })
    },
    methods: {
      ...mapActions([
        'selectStyle'
      ]),
      selectScaleStyle: function (styleId) {
        let index = _.findIndex(this.finStyles, { id: styleId})
        this.styleIndex = index
        this.$store.dispatch('selectStyle',{ type:this.type, styleIndex:this.styleIndex})
      },
      selectColorAtIndex: function (color) {
        let index = this.selectedFinStyle.colors.indexOf(color)
        this.colorIndex = index
        this.colorBox = true
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'fin.scss'
</style>
