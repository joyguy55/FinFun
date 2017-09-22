<template>
  <div id="app">
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 800px;
}
</style>
