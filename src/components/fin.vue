<template>

  <div class="options_container">

    <div class="styles_container" v-for="style in styles">
      <div class="styles_box">
        <img :src="style.image" class="fin_choice">
      </div>
      <div class="styles_radio">
        <input :id="style.id" type="radio" v-model="picked" :value="style.id" v-on:click="colorOptionsReflow(style.id)">
      </div>
    </div>

    <div class="color_option" v-for="color in colors">
      <div class="outer_circle">
        <div class="inner_circle"></div>
      </div>
    </div>

  <button id="button_override" class="btn btn-default btn-xs">Default</button>
  <small>*suggested fin colors default to scale color selections</small>

</div>
</template>

<script>
  import _ from 'underscore'

  export default {
    name: 'navigation',
    data() {
      return {
        styles: [{
            id: 1,
            colors: [1],
            image: '../assets-imgs/fin-1.svg'
          },
          {
            id: 2,
            colors: [1, 2],
            image: './assets/fin-2.png'
          },
          {
            id: 3,
            colors: [1, 2, 3],
            image: '../assets/fin-3.png'
          },
          {
            id: 4,
            colors: [1, 2, 3, 4],
            image: '../assets/fin-4.png'
          }
        ],
        picked: 1,
        colors: [1]
      }
    },
    methods: {
      colorOptionsReflow: function(styleId) {
        var index = _.findIndex(this.styles, {
          id: styleId
        })
        this.colors = this.styles[index].colors
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'fin.scss'
</style>
