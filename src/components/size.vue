<template>
  <div class="container">
    <h4>Start building a custom tail</h4>
    <p>Get started by selecting your size range</p>
    <button type="button"
            class="btn btn-primary"
            v-on:click="passTailSizeRange(youth)"
            >Youth</button>
    <button type="button"
            class="btn btn-primary"
            v-on:click="passTailSizeRange(adult)"
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
    },
    methods: {
      ...mapActions([
        'setTailSizeRange'
      ]),
      passTailSizeRange(size){
        this.$store.dispatch('setTailSizeRange', size).then(()=>{
          this.$router.push({'path':'/customize/scales'})
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'size.scss'
</style>
