<template>
  <div>
    <div class="options_container">

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
  </div>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'navigation',
  data () {
    return {
      styles: ['radio-1','radio-2','radio-3'],
      colors: [1,2,3,4,5,6]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'stickers.scss'
</style>
