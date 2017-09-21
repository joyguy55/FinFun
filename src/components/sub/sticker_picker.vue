<template>
    <div class="sticker_picker_margin">
        <div class="sticker_picker_container popover_triangle">
            <button type="button"
                    class="close close_box"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <button id="sticker_button"
                    :class="[ image.isActive ? 'sticker_box active' : 'sticker_box' ]"
                    v-for="image in stickers"
                    type="button">
                <img :src="image.image">
            </button>
            <button type="reset" id="clear_options" class="btn btn-default btn-sm">clear</button>
        </div>
    </div>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'navigation',
  data () {
    return {
        stickers: [
          { isActive: true ,
            image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-waist-1.svg"},
          { isActive: false ,
            image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-waist-2.svg"},
          { isActive: false ,
            image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-waist-3.svg"},
        ],
        triangle_position: [ 24, 50 ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'sticker_picker.scss'
</style>
