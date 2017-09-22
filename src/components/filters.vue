<template>
  <div>
    <div class="options_container">

      <h5>Select Style</h5>

      <div class="styles_container" v-for="filter in filters">
          <div class="styles_box">
          <img :src="filter.image" class="img-responsive">
          </div>
          <div class="styles_radio">
            <input :id="filter.id" name="radio" type="radio" v-on:click="selectStyle({ type:type, filterIndex:filter.id})">
            <label :for="filter.id" class="radio-label"></label>
          </div>
      </div>
       <button id="button_override" class="btn btn-default btn-xs">Clear Filters</button>
    </div>
  </div>
</template>

<script>
import _ from 'underscore'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'navigation',
  data () {
    return {
      type: 'filter'
    }
  },
  computed: {
    ...mapState({
      filters: state => state.filters,
      selectedFilter: state => state.selectedFilter
    })
  },
  methods: {
    ...mapActions([
      'selectStyle'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'filters.scss'
</style>
