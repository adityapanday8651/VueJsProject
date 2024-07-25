<template>
  <div id="app">
    <NavbarPage />
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import NavbarPage from './components/NavbarPage.vue';


export default {
  name: 'App',
  components: {
    NavbarPage
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
