<template>
  <div>
    <div class="options_container">

      <h5>Select Style</h5>

      <div class="styles_container" v-for="style in styles">

        <div class="image_placeholder"></div>

        <div class="radio_container">
          <div class="radio">
            <input :id="style" name="radio" type="radio" checked>
            <label :for="style" class="radio-label"></label>
          </div>
        </div>

      </div>

    </div>

    <div class="options_container">

     <h5>Scale Colors</h5>

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
      styles: ['radio-1','radio-2','radio-3','radio-4','radio-5'],
      colors: [1,2,3,4,5,6]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'scales.scss'
</style>
