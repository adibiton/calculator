<template>
  <div id="app">
    <h1>
      <a style="color:#50514F">C</a><a style="color:#F25F5C">a</a><a style="color:#FFE066">l</a><a style="color:#247BA0">c</a><a style="color:#70C1B3">u</a><a style="color:green">l</a><a style="color:#70C1B3">a</a><a style="color:#247BA0">t</a><a style="color:#F25F5C">o</a><a style="color:#FFE066">r</a>
    </h1>
    <calculator></calculator>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'app',
  components: {
    Calculator
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
  h1 a {
      font-size: 3em;
      text-decoration: none;
  }
</style>
