<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  methods: {
  }
}
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');

  a {
    transition: all 0.3s ease;
  }

  #app {
    font-family: 'Questrial', sans-serif;
  }
</style>
