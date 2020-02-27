<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Welcome to Your Vue.js App</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  mounted() {
    console.log(this);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
