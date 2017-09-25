<template>
  <!-- <div> -->
      <div class="color_picker">
          <button type="button"
                  class="close close_box"
                  aria-label="Close"
                  v-on:click="closeColorBox()">
           <span aria-hidden="true">&times;</span>
          </button>
        <div class="popover_triangle" :style="{left:triangleLocation}"></div>
        <div class="color_box"
             v-for="color in colors"
             :style="{background:color.color}"
             :value="color.color"
             v-on:click="changeColor({
                type: type,
                styleIndex: styleIndex,
                colorIndex: colorIndex,
                color:color.color
                })">
        </div>
        <div class="color_choice"></div>
      </div>
  <!-- </div> -->
</template>

<script>
import _ from 'underscore'
import { mapActions } from 'vuex'

export default {
  name: 'color_picker',
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
       ],
    }
  },
  props: ['type','styleIndex', 'colorIndex', 'colorBox'],
  computed: {
    triangleLocation(){
      let leftArr = ['2.5%','19%','35.8%','52.5%','69.2%','86%']
      return leftArr[this.colorIndex]
    }
  },
  methods: {
    ...mapActions([
      'changeColor'
    ]),
    closeColorBox() {
      this.$emit('update:colorBox', false)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'color_picker.scss'
</style>
