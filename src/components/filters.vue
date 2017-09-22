<template>
  <div>
    <div class="options_container">

      <h5>Select Style</h5>

      <div class="styles_container" v-for="style in styles">
          <div class="styles_box">
          <img src="https://www.finfunmermaid.com/images/custom-tails-assets/filters-1.png" class="img-responsive">
          </div>
          <div class="styles_radio">
            <input :id="style" name="radio" type="radio" checked>
            <label :for="style" class="radio-label"></label>
          </div>
      </div>
       <button id="button_override" class="btn btn-default btn-xs">Clear Filters</button>
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
  @import 'filters.scss'
</style>
