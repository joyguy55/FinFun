<template>
  <div class="container">
    <h4>Start building a custom tail</h4>
    <p>Get started by selecting your size range</p>
    <button type="button"
            class="btn btn-primary"
            v-on:click="setTailSizeRange(youth)"
            >Youth</button>
    <button type="button"
            class="btn btn-primary"
            v-on:click="setTailSizeRange(adult)"
            >Adult</button>
  </div>
</template>

<script>
  import _ from 'underscore'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'size',
    data() {
      return {
        adult: 'adult',
        youth: 'youth'
      }
    },
    computed: {
      ...mapState({
        tailSizeRange: state => state.tailSizeRange
      }),
      sizeIsSet() {
        console.log(tailSizeRange)
      }
    },
    methods: {
      ...mapActions([
        'setTailSizeRange'
      ]),
    }
  }
</script>

<style lang="scss" scoped>
  @import 'size.scss'
</style>
