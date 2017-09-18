<template>
  <div>

    <div class="options_container">

      <h5>Select Style</h5>

      <div class="styles_container" v-for="style in styles">

        <div class="image_placeholder"></div>

        <div class="radio_container">
          <div class="radio">
            <input
            :id="style.id"
            type="radio"
            v-model="picked"
            :value="style.id"
            v-on:click="colorOptionsReflow(style.id)">
          </div>
        </div>
      </div>
    </div>

    <div class="options_container">

     <h5>Fin Colors</h5>

     <div class="color_option" v-for="color in colors">
      <div class="outer_circle">
        <div class="inner_circle"></div>
      </div>
     </div>
    </div>

  </div>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'navigation',
  data () {
    return {
      styles: [
        { id:1, colors: [1] },
        { id:2, colors: [1,2] },
        { id:3, colors: [1,2,3] },
        { id:4, colors: [1,2,3,4] }
      ],
      picked: 1,
      colors: [1]
    }
  },
  methods: {
    colorOptionsReflow: function (styleId) {
      var index = _.findIndex(this.styles, { id: styleId})
      this.colors = this.styles[index].colors
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'fin.scss'
</style>
