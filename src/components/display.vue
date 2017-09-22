<template>
<div class="display_container">
  <div class="tail_sample">
    <img src="https://www.finfunmermaid.com/images/custom-tails-assets/custom-tails-full.png" class="img-responsive">
  </div>
  <div class="scale_sample visible-xs-block">
    <img src="http://finfun.production.na1.netsuitestaging.com/images/custom-tails-assets/custom-tails-sample.png">
  </div>
</div>
</template>

<script>
import _ from 'underscore'
import {
  mapActions
} from 'vuex'

export default {
  name: 'display',
  data() {
    return {}
  },
  props: [],
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'display.scss'
</style>
