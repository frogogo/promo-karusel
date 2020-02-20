<template>
  <div id="app">
    <Header/>
    <HowTo/>
    <About/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HowTo from './components/HowTo.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Header,
    HowTo,
    About
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

.section-title {
  @apply text-secondary text-6xl font-bold leading-tight mb-16 max-w-xl text-center mx-auto;
}

.btn {
  @apply py-3 px-5 text-sm uppercase font-bold rounded-full
}
.btn--primary {
  @apply bg-primary text-white border border-primary;
}

.btn--primary:hover {
  @apply bg-white text-primary;
}

.btn--white {
  @apply bg-white text-primary border border-primary;
}

.btn--white:hover {
  @apply bg-primary text-white;
}
</style>
