<template>
    <div class="sticker_picker_margin">
        <div class="sticker_picker_container popover_triangle">
            <button type="button"
                    class="close close_box"
                    aria-label="Close"
                    v-on:click="closeColorBox()">
                <span aria-hidden="true">&times;</span>
            </button>
            <button id="sticker_button"
                    class="sticker_box"
                    v-for="sticker in stickerSet"
                    type="button"
                    v-on:click="selectSticker({index:position, id:sticker.id})">
                <img :src="sticker.image">
            </button>
            <button type="reset" id="clear_options" class="btn btn-default btn-sm">clear</button>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'sticker_picker',
  data () {
    return {
        triangle_position: [ 24, 50 ],
        currentStickers: this.stickerSet
      }
  },
  props: ['stickerArr','position','stickerBox'],
  computed: {
    ...mapState({
      stickers: state => state.stickers,
      selectedStickers: state => state.selectedStickers
    }),
    stickerSet(){
      const predicate = (start,end) => {
        return (sticker)=> {
          return _.inRange(sticker.id, start, end)
        }
      }
      let start = this.$props.stickerArr[0]
      let end = this.$props.stickerArr[1]
      const stickers = _.filter(this.stickers, predicate(start,end))
      return stickers
    }
  },
  methods: {
    ...mapActions([
      'selectSticker'
    ]),
    closeColorBox() {
      this.$emit('update:stickerBox', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'sticker_picker.scss'
</style>

// :class="[ image.isActive ? 'sticker_box active' : 'sticker_box' ]"
