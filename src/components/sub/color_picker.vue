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
      colors: [
         { color: "red", isActive: true },
         { color: "blue", isActive: false },
         { color: "green", isActive: false },
         { color: "yellow", isActive: false },
         { color: "orange", isActive: false },
         { color: "purple", isActive: false },
         { color: "pink", isActive: false },
         { color: "magenta", isActive: false },
         { color: "black", isActive: false },
         { color: "lightblue", isActive: false },
         { color: "lightpink", isActive: false },
         { color: "hotpink", isActive: false},
         { color: "#435621", isActive: false },
         { color: "#a4e4e4", isActive: false },
         { color: "#1D1F20", isActive: false },
         { color: "#96B38A", isActive: false },
         { color: "#0095FF", isActive: false },
         { color: "#003382", isActive: false },
         { color: "#FF3382", isActive: false },
         { color: "#484748", isActive: false },
         { color: "#287488", isActive: false },
         { color: "#2747ff", isActive: false },
         { color: "#9284ff", isActive: false },
         { color: "#4243F2", isActive: false },
       ]
    }
  },
  methods: {
    selectTab:  function (selected_color) {
      this.tabs.map( function(selected_color) {
        selected_color.isActive = false
      })
      var index = _.findIndex(this.tabs, { name: selected_color})
      this.tabs[index].isActive = true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'fin.scss'
</style>
