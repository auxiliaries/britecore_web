<template>
  <div id="app">
    <img alt="BriteCore logo" src="./assets/logo.png">
    <RiskTypes msg="Risk Registration"/>
  </div>
</template>

<script>
import RiskTypes from './components/RiskTypes.vue'

export default {
  name: 'app',
  components: {
      RiskTypes,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
