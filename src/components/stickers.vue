<template>
  <div>
      <div class="options_container">

        <div class="styles_container" v-for="sticker in selectedStickers">
            <h4>{{sticker.name}}</h4>
            <button type="button"
                    class="btn btn-default btn-sm"
                    id="plus_button"
                    v-on:click="currentStickerOption(sticker.index)">
              <div v-if="!sticker.image">
                <span class="glyphicon glyphicon-plus-sign"></span>
              </div>
              <div v-else>
                <img :src="sticker.image">
              </div>
            </button>
        </div>
        <stickerPicker v-if="stickerBox"
                       :stickerBox.sync="stickerBox"
                       :stickerArr="selectedStickers[position].stickerIds"
                       :position="position"/>
      </div>
  </div>
</template>

<script>
  import _ from 'underscore'
  import stickerPicker from './sub/sticker_picker'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'navigation',
    data() {
      return {
        position: 0,
        stickerBox: false,
      }
    },
    computed: {
      ...mapState({
        stickers: state => state.stickers,
        selectedStickers: state => state.selectedStickers
      }),
    },
    methods: {
      currentStickerOption(index) {
        this.position = index
        this.stickerBox = true
      }
    },
    components:{
        stickerPicker,
    }
  }
</script>

 Add "scoped" attribute to limit CSS to this component only
<style lang="scss" scoped>
  @import 'stickers.scss'
</style>
