<template>
<div>
    <div class="options_container">

      <div class="styles_container" v-for="style in names">
          <h4>{{style.name}}</h4>
          <button type="button" class="btn btn-default btn-sm" id="plus_button">
            <span class="glyphicon glyphicon-plus-sign"></span>
          </button>

      </div>
      <Sticker />
    </div>
</div>
</template>

<script>
  import _ from 'underscore'
  import Sticker from './sub/sticker_picker'

  export default {
    name: 'navigation',
    data() {
      return {
        names: [{
          name: 'Waist'
        }, {
          name: 'Body'
        }, {
          name: 'Fin'
        }]
      }
    },
    methods: {},
    components:{
        Sticker,
    }
  }
</script>

 Add "scoped" attribute to limit CSS to this component only
<style lang="scss" scoped>
  @import 'stickers.scss'
</style>
