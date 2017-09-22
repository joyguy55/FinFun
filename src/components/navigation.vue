<template>
  <div id="app" class="nav_container">

    <ul class="nav nav-tabs">
      <li :class="[ tab.isActive ? 'nav-tab active' : 'nav-tab' ]" v-for="tab in tabs">
        <router-link
          :to="tab.path"
          class="nav-link"
          v-on:click="selectTab(tab.name)"
          data-toggle="tab">
          {{tab.name}}
        </router-link>
      </li>
    </ul>

    <router-view class="tab-content"></router-view>

  </div>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'navigation',
  data () {
    return {
      tabs: [
              { name:'Scales', isActive: true, path:'scales'},
              { name:'Fin', isActive: false, path:'fin'},
              { name:'Filters', isActive: false, path:'filters'},
              { name:'Stickers', isActive: false, path:'stickers'},
            ],
      styles: ['radio-1','radio-2','radio-3','radio-4','radio-5'],
      colors: [1,2,3,4,5,6]
    }
  },
  methods: {
    selectTab:  function (tab) {
      this.tabs.map( function(tab) {
        tab.isActive = false
      })
      var index = _.findIndex(this.tabs, { name: tab})
      this.tabs[index].isActive = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'navigation.scss'
</style>
