<template>
<div id="app">
  <div class="header">
    <div class="fin_fun_logo"></div>
    <div class="custom_tails_logo"></div>
  </div>
  <Display/>
  <router-view></router-view>
</div>
</template>

<script>
import Display from './components/display'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'app',
  components: {
    Display: Display
  }
}
</script>

<style lang="scss" scoped>
@import 'App.scss'
</style>
>
